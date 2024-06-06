// src/PollForm.jsx

import React, { useState, useEffect } from 'react';
import { pollData } from './../data/pollData';

const PollForm = ({ questionIds }) => {
  const [usedQuestions, setUsedQuestions] = useState(() => {
    // Retrieve used questions from localStorage
    const savedUsedQuestions = localStorage.getItem('usedQuestions');
    return savedUsedQuestions ? JSON.parse(savedUsedQuestions) : [];
  });
  const [responses, setResponses] = useState({});
  const [allQuestionsUsed, setAllQuestionsUsed] = useState(false);

  useEffect(() => {
    // Save used questions to localStorage whenever they change
    localStorage.setItem('usedQuestions', JSON.stringify(usedQuestions));

    if (usedQuestions.length === questionIds.length) {
      setAllQuestionsUsed(true);
    }
  }, [usedQuestions, questionIds]);

  const getRandomQuestion = () => {
    const unusedQuestions = questionIds.filter(
      (id) => !usedQuestions.includes(id)
    );
    if (unusedQuestions.length === 0) {
      return null; // No more unused questions
    }
    const randomIndex = Math.floor(Math.random() * unusedQuestions.length);
    const randomQuestionId = unusedQuestions[randomIndex];
    return pollData.poll.questions.find((question) => question.id === randomQuestionId);
  };

  const handleQuestionChange = () => {
    const randomQuestion = getRandomQuestion();
    if (randomQuestion) {
      setResponses({});
      setUsedQuestions((prevUsedQuestions) => [...prevUsedQuestions, randomQuestion.id]);
    }
  };

  const handleChange = (questionId, option) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: option,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User responses:', responses);
  };

  const renderQuestion = () => {
    const question = getRandomQuestion();
    if (!question) {
      return <p>All questions have been used.</p>;
    }
    return (
      <div key={question.id} className="question">
        <p>{question.question}</p>
        {question.options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option}
              onChange={() => handleChange(question.id, option)}
            />
            {option}
          </label>
        ))}
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      {allQuestionsUsed ? <p>All questions have been used.</p> : renderQuestion()}
      <button type="submit">Submit</button>
      <button type="button" onClick={handleQuestionChange} disabled={allQuestionsUsed}>
        Next Question
      </button>
    </form>
  );
};

export default PollForm;

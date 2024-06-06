import React, { useState, useEffect } from "react";
import PollResults from "./PollResults";


const Poll = ({ question, options, pollId }) => {
  const [votes, setVotes] = useState(() => {
    const savedVotes = localStorage.getItem(pollId);
    // debugger;
    return savedVotes ? JSON.parse(savedVotes) : Array(options.length).fill(0);
  });

  const [voted, setVoted] = useState(false);

  useEffect(() => {
    localStorage.setItem(pollId, JSON.stringify(votes));
  }, [votes, pollId]);

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
    setVoted(true);
  };

  return (
    <div className="poll-container">
      <h3>{question}</h3>
      {!voted ? (
        options.map((option, index) => (
          <label key={index} className="poll-option">
            <input
              type="radio"
              name="poll"
              value={index}
              onClick={() => handleVote(index)}
            />
            {option}
          </label>
        ))
      ) : (
        <PollResults options={options} votes={votes} />

      )}
    </div>
  );
};

export default Poll;

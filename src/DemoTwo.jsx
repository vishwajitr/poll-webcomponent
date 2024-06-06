
import Poll from "./components/Poll";

function DemoTwo() {
  const polls = [
    {
      question: "1. How would you rate your current mood?",
      options: [
        "Happy",
        "Sad",
        "Neutral",
      ],
      pollId: "poll3",
    },
    {
      question: "2. How satisfied are you with your overall life right now?",
      options: [
        "Very Satisfied",
        "Neutral",
        "Dissatisfied",
      ],
      pollId: "poll4",
    },
    {
      question: "3. How would you describe your sleep quality",
      options: [
        "Excellent",
        "Average",
        "Very Poor",
      ],
      pollId: "poll5",
    }
  ];

  return (
    <div className="DemoTwo">
      {polls.map((poll, index) => (
        <Poll key={index} {...poll} />
      ))}
    </div>
  );
}

export default DemoTwo;

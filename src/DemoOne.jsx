
import Poll from "./components/Poll";

function DemoOne() {
  const polls = [
    {
      question: "How you feel today?",
      options: [
        "Brilliant! I have so much energy",
        "Always can be worse",
        "Please, end my misery.",
      ],
      pollId: "poll1",
    },
    {
      question: "How you like the Opinary test?",
      options: [
        "It was great and so challenging",
        "Not bad, but you can improve",
        "It was a nightmare, never again.",
      ],
      pollId: "poll2",
    }
  ];

  return (
    <div className="DemoOne">
      {polls.map((poll, index) => (
        <Poll key={index} {...poll} />
      ))}
    </div>
  );
}

export default DemoOne;

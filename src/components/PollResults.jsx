import React from "react";

const PollResults = ({ options, votes }) => {
  return (
    <div className="poll-results">
      <h3>Poll Results</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Option</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {options.map((option, index) => (
            <tr key={index}>
              <td>{option}</td>
              <td>{votes[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PollResults;

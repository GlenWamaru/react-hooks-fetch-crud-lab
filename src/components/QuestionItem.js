import React, { useState } from "react";

function QuestionItem({ question, onCorrectAnswerChange }) {
  const { id, prompt, answers, correctIndex } = question;
  const [newCorrectIndex, setNewCorrectIndex] = useState(correctIndex);

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleCorrectAnswerChange = (e) => {
    const newIndex = parseInt(e.target.value);
    setNewCorrectIndex(newIndex);

    // Send a PATCH request to update the correct answer on the server
    onCorrectAnswerChange(question.id, newIndex);
  };

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select value={newCorrectIndex} onChange={handleCorrectAnswerChange}>
          {options}
        </select>
      </label>
    </li>
  );
}

export default QuestionItem;
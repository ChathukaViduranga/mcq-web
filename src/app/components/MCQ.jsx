"use client";
import React, { useState } from "react";

const MCQ = ({ questionData }) => {
  const { question, options, answer, justification } = questionData;
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    setShowResult(true);
  };

  return (
    <div className="p-4  rounded-lg shadow-md bg-slate-100 text-black mb-6">
      <h3 className="text-lg font-semibold mb-4">{question}</h3>
      <div className="space-y-3">
        {options.map((option, index) => (
          <label
            key={index}
            className={`block p-3 border rounded cursor-pointer ${
              selectedOption === option
                ? "bg-white text-black"
                : "hover:bg-gray-100"
            }`}
          >
            <input
              type="radio"
              name="option"
              value={option}
              onChange={() => setSelectedOption(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-black/70 cursor-pointer text-white font-medium rounded hover:bg-black"
        disabled={!selectedOption}
      >
        Submit
      </button>
      {showResult && (
        <div className="mt-4 p-3 rounded bg-gray-800 text-white">
          <p>
            <strong>Correct Answer:</strong> {answer}
          </p>
          <p className="text-green-500">
            <strong>Justification:</strong> {justification}
          </p>
        </div>
      )}
    </div>
  );
};

export default MCQ;

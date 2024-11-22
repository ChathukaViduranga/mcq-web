import React from "react";
import MCQ from "./MCQ";
import questions from "../data/questions";

const Questions = () => {
  return (
    <div className="bg-white text-black min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">MCQ Quiz</h1>
      {questions.map((questionData, index) => (
        <MCQ key={index} questionData={questionData} />
      ))}
    </div>
  );
};

export default Questions;

import React from "react";
import defaultAnswers from "./answers";

const Choice = () => {
  const randomIdx = Math.floor(Math.random() * defaultAnswers.length);
  const randomAnswer = defaultAnswers[randomIdx];
  return randomAnswer;
};

export default Choice;

import React, { useState } from "react";
import DefaultAnswers from "./answers";
import Choice from "./choice";
import "./EightBall.css";

const EightBall = ({ answers = DefaultAnswers }) => {
  const [answer, setAnswer] = useState({
    msg: "Think of a Question",
    color: "black",
  });

  const handleClick = (evt) => {
    setAnswer(Choice(answers));
  };

  return (
    <div>
      <div
        className="EightBall"
        onClick={handleClick}
        style={{ backgroundColor: answer.color }}
      >
        <b>{answer.msg}</b>
      </div>
    </div>
  );
};

export default EightBall;

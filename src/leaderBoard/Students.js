import React from "react";
import { useState } from "react";

function Students(props) {
  const [stuScore, setStuScore] = useState(props.score);

  function ctaIncrease() {
    setStuScore(stuScore + 1);
  }

  function ctaDecrease() {
    setStuScore(stuScore - 1);
  }

  return (
    <div className="studentContainer">
      <div className="nameUni">
        <h2 className="studentName">Student Name: {props.name}</h2>
        <button className="increase" onClick={ctaIncrease}>
          +
        </button>
        <button className="decrease" onClick={ctaDecrease}>
          -
        </button>
        <p className="university">
          University Name
          {stuScore >= 350 ? (
            <span className="success">Success</span>
          ) : stuScore <= 340 ? (
            <span className="fail">Fail</span>
          ) : (
            ""
          )}
        </p>
      </div>
      <div className="stuScore">
        <h2 className="score">Score: {stuScore}</h2>
      </div>
    </div>
  );
}

export default Students;

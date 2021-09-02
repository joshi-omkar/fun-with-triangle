import React, { useState } from "react";

const qna = [
  {
    queNo: "1",
    que: "A triangle having angles 135°, 15° and 30° is a/an ____ triangle ? ",
    options: ["Right", "Obtuse", "Acute"],
    answer: "Obtuse"
  },
  {
    queNo: "2",
    que: "A triangle having angles 90°, 25° and 65° is a/an ____ triangle ? ",
    options: ["Right", "Obtuse", "Acute"],
    answer: "Right"
  },
  {
    queNo: "3",
    que: "A triangle having angles 60°, 55° and 65° is a/an ____ triangle ? ",
    options: ["Right", "Obtuse", "Acute"],
    answer: "Acute"
  },
  {
    queNo: "4",
    que: "A triangle is two angles as 124° and 45°. What is the third angle? ",
    options: ["10°", "11°", "12°"],
    answer: "11°"
  },
  {
    queNo: "5",
    que:
      "A triangle having sides 1.7cm, 2.3cm and 1.7cm is a/an ____ triangle ? ",
    options: ["Equilateral", "Scalene", "Isosceles"],
    answer: "Isosceles"
  },
  {
    queNo: "6",
    que:
      "A triangle having sides 1.4cm, 2.3cm and 1.7cm is a/an ____ triangle ? ",
    options: ["Equilateral", "Scalene", "Isosceles"],
    answer: "Scalene"
  },
  {
    queNo: "7",
    que:
      "A triangle is having two sides 1.9cm, 1.9cm and angle between them is 60°, then it is a/an ____ triangle ? ",
    options: ["Equilateral", "Scalene", "Isosceles"],
    answer: "Equilateral"
  },
  {
    queNo: "8",
    que: "If ABC is an equilateral triangle, then each angle equals to ? ",
    options: ["90°", "60°", "120°"],
    answer: "60°"
  },
  {
    queNo: "9",
    que: " The angles opposite to equal sides of a triangle are ?",
    options: ["Complementary", "Supplementary", "Equal"],
    answer: "Equal"
  },
  {
    queNo: "10",
    que: " In triangle ABC, if AB=BC and ∠B = 70°, ∠A will be ? ",
    options: ["55°", " 70°", "65°"],
    answer: "55°"
  }
];

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [output, setOutput] = useState();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setOutput(<div className="output"> Your Score is {score}</div>);
  };

  return (
    <div>
      <h2>Quiz on triangles</h2>

      <form onSubmit={onHandleSubmit} className="quiz-form">
        {qna.map((question) => {
          return (
            <div className="box">
              <div className="question">{question.que}</div>
              <div className="options">
                {question.options.map((answers) => {
                  return (
                    <div className="option">
                      <input
                        required
                        cursor="pointer"
                        type="radio"
                        value={answers}
                        name={question.queNo}
                        onClick={(e) => {
                          const ans = e.target.value;
                          if (question.answer === ans) {
                            setScore(score + 1);
                          }
                        }}
                      ></input>
                      {answers}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div>
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
        <div>{output}</div>
      </form>
    </div>
  );
};

export default Quiz;

import React, { useState } from "react";

const IsTriangle = () => {
  const [angle1, setAngle1] = useState(0);
  const [angle2, setAngle2] = useState(0);
  const [angle3, setAngle3] = useState(0);
  const [output, setOutput] = useState();

  const handleOnCLick = () => {
    let total = angle1 + angle2 + angle3;

    if (total === 180) {
      setOutput(<div className="output">Yay, the angles form a triangle!</div>);
    } else {
      setOutput(
        <div className="output">Oh Oh! The angle doesn't form a triangle</div>
      );
    }
  };

  return (
    <div>
      <h1>Angles of triangles</h1>
      <div classNmae="container">
        <h3>Angle1</h3>
        <input
          type="number"
          className="input"
          onChange={(e) => {
            var intial = Number(e.target.value);
            setAngle1(intial);
          }}
        />
        <br />
        <h3>Angle2</h3>
        <input
          type="number"
          className="input"
          onChange={(e) => {
            var quantity = Number(e.target.value);
            setAngle2(quantity);
          }}
        />
        <br />
        <h3>Angle3</h3>
        <input
          type="number"
          className="input"
          onChange={(e) => {
            var current = Number(e.target.value);
            setAngle3(current);
          }}
        />

        <br />

        <button type="submit" className="btn" onClick={handleOnCLick}>
          Tell Me!!
        </button>
      </div>

      <div>{output}</div>
    </div>
  );
};

export default IsTriangle;

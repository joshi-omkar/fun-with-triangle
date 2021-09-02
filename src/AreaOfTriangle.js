import React, { useState } from "react";

const AreaOfTraiangle = () => {
  const [side1, setSide1] = useState(0);
  const [side2, setSide2] = useState(0);
  const [side3, setSide3] = useState(0);
  const [output, setOutput] = useState();

  const handleOnClick = () => {
    const s = (side1 + side2 + side3) / 2;
    const areaValue = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

    const area = areaValue.toFixed(4);

    setOutput(
      <div className="output">
        Area of a triangle using heron's formula is {area} units
      </div>
    );
  };

  return (
    <div>
      <h1>Calculate Area of a triangle</h1>
      <div classNmae="container">
        <h3>Enter first side of a triangle</h3>
        <input
          type="number"
          className="input"
          onChange={(e) => {
            var intial = Number(e.target.value);
            setSide1(intial);
          }}
        />
        <br />
        <h3>Enter second side of a triangle</h3>
        <input
          type="number"
          className="input"
          onChange={(e) => {
            var quantity = Number(e.target.value);
            setSide2(quantity);
          }}
        />
        <br />
        <h3>Enter third side of a triangle</h3>
        <input
          type="number"
          className="input"
          onChange={(e) => {
            var current = Number(e.target.value);
            setSide3(current);
          }}
        />

        <br />

        <button type="submit" className="btn" onClick={handleOnClick}>
          Tell Me!!
        </button>
      </div>

      <div>{output}</div>
    </div>
  );
};

export default AreaOfTraiangle;

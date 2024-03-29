import React, { useState } from "react";

const Hypotenuse = () => {
  const [side1, setSide1] = useState(0);
  const [side2, setSide2] = useState(0);
  const [output, setOutput] = useState();

  const handleOnClick = (e) => {
    e.preventDefault();

    const ans = Math.hypot(side1, side2);

    setOutput(<div className="output">The length of hypotenuse is {ans.toFixed(2)}</div>);
  };

  return (
    <div>
      <h1>Calculate Hypotenuse of a triangle</h1>

      <form onSubmit={handleOnClick}>
        <div classNmae="container">
          <h3>Enter base value (a) =</h3>
          <input
            type="number"
            required
            min="1"
            step="1"
            className="input"
            onChange={(e) => {
              var intial = Number(e.target.value);
              setSide1(intial);
            }}
          />
          <br />
          <h3>Enter height value (b) =</h3>
          <input
            type="number"
            required
            min="1"
            step="1"
            className="input"
            onChange={(e) => {
              var quantity = Number(e.target.value);
              setSide2(quantity);
            }}
          />

          <br />

          <button type="submit" className="btn">
            Tell Me!!
          </button>
        </div>

        <div>
          <p>Hypotenuse formula √(base² + height²)</p>
        </div>
      </form>
      <div>{output}</div>
    </div>
  );
};

export default Hypotenuse;

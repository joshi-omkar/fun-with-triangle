import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Nav = () => {
  return (
    <div className="navbar">
      <Link to="/" className="link1">
        <img
          src="https://media.giphy.com/media/Y1SlFb8i8s0DmaDGfB/giphy-downsized-large.gif?cid=ecf05e47422uj9mi56k0bka2278ghgyg62kkub52a20wndig&rid=giphy-downsized-large.gif&ct=g"
          alt="Girl in a jacket"
        />
        <h2>Fun With Triangle</h2>
      </Link>
      <nav className="nav">
        <Link to="/istriangle" className="link">
          Is Triangle?
        </Link>

        <Link to="/" className="link">
          Quiz
        </Link>

        <Link to="/hypotenuse" className="link">
          Hypotenuse
        </Link>

        <Link to="/areoftriangle" className="link">
          Area of Triangle
        </Link>
      </nav>
    </div>
  );
};

export default Nav;

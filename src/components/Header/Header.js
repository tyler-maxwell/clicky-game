import React from "react";
import "./Header.css";

const Header = props => (
  <div className="container-fluid">
    <div className="row headerRow">
      <div className="col-md-4 text-center headerCol">
        <a href="/" className="brand">
          Clicky Game
        </a>
      </div>
      <div
        className={
          props.hasStarted
            ? props.hasBeenClicked
              ? "col-md-4 text-center headerCol wrongMessage"
              : "col-md-4 text-center headerCol rightMessage"
            : "col-md-4 text-center headerCol"
        }
      >
        {props.hasStarted
          ? props.hasBeenClicked
            ? "You guessed incorrectly!"
            : "You guessed correctly!"
          : "Click an image to begin!"}
      </div>
      <div className="col-md-4 text-center headerCol">
        Score: {props.score} | Top Score: {props.topScore}
      </div>
    </div>
  </div>
);

export default Header;

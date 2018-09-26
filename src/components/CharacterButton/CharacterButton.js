import React from "react";
import "./CharacterButton.css";

const CharacterButton = props => (
  <div onClick={() => props.selectCharacter(props.id)} className="card">
    <img alt={props.name} src={props.image} />
  </div>
);

export default CharacterButton;

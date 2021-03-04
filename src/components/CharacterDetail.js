import React from "react";
import { Link } from "react-router-dom";
import PhotoNotFound from "../images/advertencia.png";

const CharacterDetail = (props) => {
  if (props.character === undefined) {
    return (
      <div className="not-found">
        <img className="image-not-found" src={PhotoNotFound} alt="Not found" />
        <div className="container-not-found">
          <h2 className="title-not-found">Oops!</h2>
          <h3 className="subtitle-not-found">
            Sorry... but we can´t find the character
          </h3>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <button className="back-not-found">Back to homepage</button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <p className="back"> {"<"} Volver</p>
        </Link>
        <div className="detail">
          <img
            className="image-detail"
            src={props.character.image}
            alt={props.character.name}
          />
          <div className="character-details">
            <h3 className="name-detail">{props.character.name}</h3>
            <ul>
              <li className="list-detail">Status: {props.character.status}</li>
              <li className="list-detail">
                Species: {props.character.species}
              </li>
              <li className="list-detail">Origin: {props.character.origin}</li>
              <li className="list-detail">
                Episodes: {props.character.episode.length}
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
};
export default CharacterDetail;

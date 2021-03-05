import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/App.scss";
import PropTypes from "prop-types";

const CharacterCard = (props) => {
  return (
    <>
      <Link
        to={`/character/${props.character.id}`}
        style={{ textDecoration: "none", color: "#ffffff" }}
      >
        <img
          className="image"
          src={props.character.image}
          alt={props.character.name}
        />
        <div className="description">
          <h3 className="name-character">{props.character.name}</h3>
          <p className="specie-character">{props.character.species}</p>
        </div>
      </Link>
    </>
  );
};
CharacterCard.propTypes = {
  character: PropTypes.object,
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  specie: PropTypes.string,
};
export default CharacterCard;

import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import getDataFromApi from "../services/getDataFromApi";
import "../stylesheets/App.scss";
import Filters from "./Filters";
import CharacterList from "./CharacterList";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  const filterCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(name.toLowerCase()); //no reconoce las minúsculas...
  });
  console.log(filterCharacters);

  const handleInput = (ev) => {
    console.log(ev.target.value);
    setName(ev.target.value);
  };

  return (
    <div className="page">
      <h1>
        <img className="title" src={logo} alt="Ricky and Morty" />
      </h1>
      <Filters handleInput={handleInput} />
      <CharacterList characters={filterCharacters} />
    </div>
  );
};
export default App;

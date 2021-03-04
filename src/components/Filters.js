import React, { useState, useEffect } from "react";

const Filters = (props) => {
  return (
    <section>
      <form>
        <input
          className="input"
          type="text"
          onChange={props.handleInput}
          value={props.name}
          placeholder="Escribe el nombre del personaje"
        />
      </form>
    </section>
  );
};
export default Filters;
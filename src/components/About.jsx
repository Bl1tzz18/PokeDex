import React from 'react';
import { Link } from "react-router-dom";

const About = () => {
  
  const linkStyle = {
    marginRight: "1rem",
    fontSize: "1.5rem",
    color: "white"
  };
  
  return (
    <div>
      <div className="nav">
        <nav className="app__navbar text-pop-up-top">
          <Link to="/" style={linkStyle}>
            PokeDex
          </Link>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
        </nav>
      </div>
      <div className="about">
      <h1>About the PokeDex</h1>
        <br></br>
        <p>This PokeDex was created as Assignment 2 for the WEB2 Course. It is a comprehensive database of all the known species of Pokemon.</p>
        <br />
        <p>The pokemons' data is retrieved from the <a href="https://pokeapi.co/">https://pokeapi.co/</a></p>
        <br />
        <p>Here are the requirements for the assignment : <a href="https://github.com/KasperKnop/WEB2/blob/main/08%20Assignment%202/README.md">https://github.com/KasperKnop/WEB2/blob/main/08%20Assignment%202/README.md</a></p>
        <br /><br />
        <p>Thank you for using the PokeDex!</p>
      </div>

    </div>
  );
};

export default About;

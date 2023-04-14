import React, { useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import PokeInfo from "./Pokeinfo";

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [showModal, setShowModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    const pokemonData = await Promise.all(
      res.map(async (item) => {
        const result = await axios.get(item.url);
        return result.data;
      })
    );

    const sortedData = pokemonData.sort((a, b) => (a.id > b.id ? 1 : -1));
    setPokeData(sortedData);
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedPokemon(null);
    setShowModal(false);
  };

  const linkStyle = {
    marginRight: "1rem",
    fontSize: "1.5rem",
    color: "white",
  };

  return (
    <>
      {/*Navbar*/}
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

      <div className="conainter">
        <div className="main-content">
          <Card
            pokemon={pokeData}
            loading={loading}
            onCardClick={handleCardClick}
          />
          {showModal && selectedPokemon && (
            <PokeInfo pokemon={selectedPokemon} onClose={handleCloseModal} />
          )}
        </div>
        <div className="btn-group">
          {prevUrl && (
            <button
              onClick={() => {
                setUrl(prevUrl);
              }}
            >
              Previous
            </button>
          )}

          {nextUrl && (
            <button
              onClick={() => {
                setUrl(nextUrl);
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;

import React from "react";

const PokeInfo = ({ pokemon, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          X
        </span>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="poke-image"/>
        <div className="poke-stats">
          {pokemon.stats.map((base) => (
            <p key={base.stat.name}>
              <strong>{base.stat.name}:</strong> {base.base_stat}
            </p>
          ))}
        </div>
        <div className="ability-container">
          {pokemon.abilities.map((ability) => (
            <div key={ability.ability.name} className="ability-circle">
              {ability.ability.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokeInfo;

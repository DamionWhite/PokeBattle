import React from 'react';
import './InfoBox.css';
import HealthBar from './HealthBar/HealthBar';
import GenderSymbol from './GenderSymbol/GenderSymbol';

const InfoBox = function InfoBox(props) {
  let showHealth;
  const { isPlayer, pokemon } = props;
  const {
    currentHealth, health, name, gender, level,
  } = pokemon;

  if (isPlayer) {
    showHealth = <p className="pokemonHealth">{`${currentHealth} / ${health}`}</p>;
  }

  return (
    <div className="InfoBox">
      <p className="pokemonName">{name}</p>
      <GenderSymbol gender={gender} />
      <p className="pokemonLevel">{`Lv: ${level}`}</p>
      <HealthBar
        currentHealth={currentHealth}
        health={health}
      />
      {showHealth}
    </div>
  );
};

export default InfoBox;

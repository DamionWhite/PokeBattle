import React from 'react';
import './BattleBox.css';
import InfoBox from './InfoBox/InfoBox';

const BattleBox = function BattleBox(props) {
  const { activePokemons } = props;
  return (
    <div id="BattleBox">
      <InfoBox pokemon={activePokemons[0]} isPlayer />
      <InfoBox pokemon={activePokemons[1]} />
    </div>
  );
};

export default BattleBox;

import React from 'react';
import './InfoBox.css';
import HealthBar from './HealthBar/HealthBar';
import GenderSymbol from './GenderSymbol/GenderSymbol';

class InfoBox extends React.Component {
  render() {
    let showHealth;
    if (this.props.isPlayer) {
      showHealth = <p className='pokemonHealth'>{this.props.pokemon.currentHealth}/{this.props.pokemon.health}</p>;
    }

    return (
      <div className='InfoBox'>
        <p className='pokemonName'>{this.props.pokemon.name}</p>
        <GenderSymbol gender={this.props.pokemon.gender} />
        <p className='pokemonLevel'>Lv: {this.props.pokemon.level}</p>
        <HealthBar
          currentHealth={this.props.pokemon.currentHealth}
          health={this.props.pokemon.health}
        />
        {showHealth}
      </div>
    );
  }
}

export default InfoBox;
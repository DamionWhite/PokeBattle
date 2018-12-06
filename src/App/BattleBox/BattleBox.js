import React from 'react';
import './BattleBox.css'
import InfoBox from './InfoBox/InfoBox';

class BattleBox extends React.Component {
  render() {
    return (
      <div id='BattleBox'>
        <InfoBox pokemon={this.props.activePokemons[0]} isPlayer />
        <InfoBox pokemon={this.props.activePokemons[1]} />
      </div>
    );
  }
}

export default BattleBox;
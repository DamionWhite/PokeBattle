import React from 'react';
import './MoveSelection.css';

class MoveSelection extends React.Component {
  render() {
    return (
      <div id='MoveSelection'>
        {this.props.pokemonMoves.map((item, i) => {
          return (
            <p
              key={i}
              onClick={() => this.props.handleClickMove(item, i)}
              onMouseEnter={() => { this.props.handleHoverMove(i) }}
            >
              {item.name}
            </p>
          );
        })}

      </div>
    );
  }
}

export default MoveSelection;
import React from 'react';
import './MoveSelection.css';

class MoveSelection extends React.Component {
  render() {
    const { pokemonMoves, selectedMove } = this.props;

    const moveSelection = (
      <div id="MoveSelection">
        {pokemonMoves.map((item, i) => {
          let isSelected = '';

          if (i === selectedMove) {
            isSelected = (
              <span className="selector">
                {'>'}
              </span>
            );
          }

          return (
            <div key={`${i}`}>
              {isSelected}
              <p
                onClick={() => this.props.handleClickMove(item, i)}
                onMouseEnter={() => { this.props.handleHoverMove(i) }}
              >
                {item.name}
              </p>
            </div>
          );
        })}

      </div>
    );

    return moveSelection;
  }
}

export default MoveSelection;

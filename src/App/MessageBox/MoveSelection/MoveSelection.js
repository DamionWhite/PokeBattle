import React from 'react';
import './MoveSelection.css';

class MoveSelection extends React.Component {
  render() {
    let moveSelection = (
      <div id='MoveSelection'>
        {this.props.pokemonMoves.map((item, i) => {
          let isSelected = '';

          if (i === this.props.selectedMove) {
            isSelected = (
              <span className='selector'>
                >
              </span>
            );
          }

          return (
            <div key={i}>
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
import React from 'react';
import './MessageBox.css';
import CommandMenu from './CommandMenu/CommandMenu';
import MoveSelection from './MoveSelection/MoveSelection';
import MoveInfo from './MoveInfo/MoveInfo';

class MessageBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moveCurrentSelected: props.playerPokemon.moves[0],
      moveCurrentSelectedIndex: 0,
      actionCurrentSelected: 0 // 0:Attack; 1:Bag; 2:Pokemon; 3:Run;
    };

    this.selectMove = this.selectMove.bind(this);
  }

  selectMove(moveIndex) {
    const { playerPokemon } = this.props;
    const { moves } = playerPokemon;
    this.setState({
      moveCurrentSelected: moves[moveIndex],
      moveCurrentSelectedIndex: moveIndex,
    });
  }

  selectAction(actionIndex) {
    this.setState({
      actionCurrentSelected: actionIndex,
    });
  }

  render() {
    const {
      currentAction, handleClickAttack, handleClickMove, playerPokemon,
    } = this.props;

    const {
      moveCurrentSelected, moveCurrentSelectedIndex,
    } = this.state;

    const {
      moves, name,
    } = playerPokemon;

    let messageBox;

    if (currentAction === 'selectingAction') {
      messageBox = (
        <div id="MessageBox" className="selectingAction">
          <p>{`What will ${name} do?`}</p>
          <CommandMenu handleClickAttack={handleClickAttack} />
        </div>
      );
    } else if (currentAction === 'selectingMove') {
      messageBox = (
        <div id="MessageBox" className="selectingMove">
          <MoveSelection
            pokemonMoves={moves}
            handleClickMove={handleClickMove}
            handleHoverMove={this.selectMove}
            selectedMove={moveCurrentSelectedIndex}
          />
          <MoveInfo move={moveCurrentSelected} />
        </div>
      );
    }

    return messageBox;
  }
}

export default MessageBox;

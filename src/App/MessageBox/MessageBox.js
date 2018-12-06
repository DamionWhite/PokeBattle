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
      actionCurrentSelected: 0  // 0:Attack; 1:Bag; 2:Pokemon; 3:Run;
    };
  }

  selectMove(moveIndex) {
    this.setState({
      moveCurrentSelected: this.props.playerPokemon.moves[moveIndex],
      moveCurrentSelectedIndex: moveIndex
    });
  }

  selectAction(actionIndex) {
    this.setState({
      actionCurrentSelected: actionIndex
    });
  }

  render() {
    //console.log();
    let messageBox;
    if (this.props.currentAction === 'selectingAction') {
      messageBox = (
        <div id='MessageBox' className='selectingAction'>
          <p>What will {this.props.playerPokemon.name} do?</p>
          <CommandMenu handleClickAttack={this.props.handleClickAttack} />
        </div>
      )
    }
    else if (this.props.currentAction === 'selectingMove') {
      messageBox = (
        <div id='MessageBox' className='selectingMove'>
          <MoveSelection
            pokemonMoves={this.props.playerPokemon.moves}
            handleClickMove={this.props.handleClickMove}
            handleHoverMove={this.selectMove.bind(this)}
            selectedMove={this.state.moveCurrentSelectedIndex}
          />
          <MoveInfo move={this.state.moveCurrentSelected} />
        </div>
      )
    }

    return messageBox;
  }
}

export default MessageBox;
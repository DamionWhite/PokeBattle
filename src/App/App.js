import '../index.css';
import React from 'react';
import BattleBox from './BattleBox/BattleBox';
import MessageBox from './MessageBox/MessageBox';
import Trainer from '../utils/Trainer';
import Pokemons from '../utils/Pokemons';
import Move from '../utils/Move';
import Pokemon from '../utils/Pokemon';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainers: Array(2),
      activePokemons: Array(2),
      currentAction: 'selectingAction',
    };

    this.selectMove = this.selectMove.bind(this);
    this.useMove = this.useMove.bind(this);

    //  Disable context menu on Right Click
    document.addEventListener('contextmenu', event => event.preventDefault());

    let trainer = new Trainer('Snoek');
    trainer.addPokemon(Pokemons[2]);
    trainer.addPokemon(Pokemons[1]);

    this.state.trainers[0] = trainer;

    trainer = new Trainer('Maarten');
    trainer.addPokemon(Pokemons[8]);
    trainer.addPokemon(Pokemons[7]);

    this.state.trainers[1] = trainer;

    this.state.activePokemons[0] = this.state.trainers[0].party[0];
    this.state.activePokemons[1] = this.state.trainers[1].party[0];
  }

  selectMove() {
    this.setState({
      currentAction: 'selectingMove',
    });
  }

  selectAction() {
    this.setState({
      currentAction: 'selectingAction',
    });
  }

  useMove(move, moveIndex) {
    // Player uses a move
    if (move.currentPowerPoints <= 0) {
      console.log('Out of PP');
      return;
    }

    const moveUser = this.state.activePokemons[0];
    const moveTarget = this.state.activePokemons[1];

    // console.log(move);
    // console.log(moveUser);
    // console.log(moveTarget);

    const newPokemons = this.state.activePokemons;

    // Enemy chooses random move

    // Decide who acts first

    // execute first move
    newPokemons[0].moves[moveIndex].currentPowerPoints -= 1;
    newPokemons[1].currentHealth = Math.floor(
      newPokemons[1].currentHealth - Pokemon.calcDamage(move, moveUser, moveTarget),
    );
    if (newPokemons[1].currentHealth < 0) {
      newPokemons[1].currentHealth = 0;
    }

    this.setState({
      activePokemons: newPokemons,
    });

    // execute last move

    // reset view
    this.selectAction();
  }

  render() {
    const { activePokemons, currentAction } = this.state;

    return (
      <div id="App">
        <BattleBox activePokemons={activePokemons} />
        <MessageBox
          playerPokemon={activePokemons[0]}
          currentAction={currentAction}
          handleClickAttack={this.selectMove}
          handleClickMove={this.useMove}
        />
      </div>
    );
  }
}

export default App;

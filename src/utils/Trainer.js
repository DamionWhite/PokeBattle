import Pokemons from './Pokemons';

class Trainer {
  constructor(name) {
    this.name = name;
    this.party = [];
  }

  addPokemon(pokemon) {
    if (this.party.length < 6) {
      this.party.push(pokemon);
    } else {
      console.log('Party full');
    }
  }
}

export default Trainer;
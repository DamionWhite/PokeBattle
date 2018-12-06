import Pokemon from './Pokemon';
import moves from './moves';
const types = Pokemon.types;

var Pokemons = [];

Pokemons.push(new Pokemon(
  "Bulbasaur",
  types.grass,
  45,
  49,
  49,
  65,
  65,
  45,
  'm'
));

Pokemons[0].addMove(moves[0]);
Pokemons[0].addMove(moves[1]);

Pokemons.push(new Pokemon(
  "Ivysaur",
  types.grass,
  60,
  62,
  63,
  80,
  80,
  60,
  'm'
));

Pokemons[1].addMove(moves[0]);
Pokemons[1].addMove(moves[1]);
Pokemons[1].addMove(moves[2]);

Pokemons.push(new Pokemon(
  "Venusaur",
  types.grass,
  80,
  82,
  83,
  100,
  100,
  80,
  'm'
));

Pokemons[2].addMove(moves[0]);
Pokemons[2].addMove(moves[1]);
Pokemons[2].addMove(moves[2]);
Pokemons[2].addMove(moves[3]);

Pokemons.push(new Pokemon(
  "Charmander",
  types.fire,
  39,
  52,
  43,
  60,
  50,
  65,
  'm'
));

Pokemons.push(new Pokemon(
  "Charmeleon",
  types.fire,
  58,
  64,
  58,
  80,
  65,
  80,
  'm'
));

Pokemons.push(new Pokemon(
  "Charizard",
  types.fire,
  78,
  84,
  78,
  109,
  85,
  100,
  'm'
));

Pokemons.push(new Pokemon(
  "Squirtle",
  types.water,
  44,
  48,
  65,
  50,
  64,
  43,
  'm'
));

Pokemons.push(new Pokemon(
  "Wartortle",
  types.water,
  59,
  63,
  80,
  65,
  80,
  58,
  'm'
));

Pokemons.push(new Pokemon(
  "Blastoise",
  types.water,
  79,
  83,
  100,
  85,
  105,
  78,
  'm'
));

export default Pokemons;
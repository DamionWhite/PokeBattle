import Move from './Move';
import Pokemon from './Pokemon';
import MoveInfo from '../App/MessageBox/MoveInfo/MoveInfo';

let moves = [];

moves.push(new Move(
  'Tackle',
  Pokemon.types.normal,
  Move.categories.physical,
  50,
  100,
  35
));

moves.push(new Move(
  'Vine Whip',
  Pokemon.types.grass,
  Move.categories.physical,
  45,
  100,
  25
));

moves.push(new Move(
  'Petal Blizzard',
  Pokemon.types.grass,
  Move.categories.physical,
  90,
  100,
  15
));

moves.push(new Move(
  'Solar Beam',
  Pokemon.types.grass,
  Move.categories.special,
  120,
  100,
  10
));

moves.push(new Move(
  'Thunderbolt',
  Pokemon.types.electric,
  Move.categories.special,
  90,
  100,
  15
));

moves.push(new Move(
  'Ember',
  Pokemon.types.fire,
  Move.categories.special,
  40,
  100,
  25
));

export default moves;
import Move from './Move';

class Pokemon {
  constructor(name, type, hp, atk, spAtk, def, spDef, spd, gender) {
    this.name = name;
    this.health = hp;
    this.currentHealth = this.health;
    this.attack = atk;
    this.specialAttack = spAtk;
    this.defense = def;
    this.specialDefense = spDef;
    this.speed = spd;
    this.type = type;
    this.level = 50;
    this.gender = gender;
    this.moves = [];
  }

  static types = {
    normal: 'normal',
    grass: 'grass',
    fire: 'fire',
    water: 'water',
    electric: 'electric',
  };

  addMove(move) {
    if (this.moves.length < 4) {
      this.moves.push(move);
      console.log(`${this.name} learned ${move.name}`);
    } else {
      console.log('Can\'t learn more moves')
    }
  }

  static calcDamage(move, user, target) {
    // https://bulbapedia.bulbagarden.net/wiki/Damage#Damage_calculation
    if (move.category === Move.categories.status) {
      return console.log('Status moves yet to be implemented');
    }

    let power = move.power;
    let level = user.level;
    let attack;
    let defense;

    //  The modifier variables
    let stab = 1;   // Same Type Attack Bonus; 1 | 1.5
    let type = 1;   // Type effectiveness; 0 | 0.25 | 0.5 | 1 | 2 | 4
    let random = Math.random() * (1 - 0.85) + 0.85; // Random number between 0.85 and 1.0 (inclusive)

    // STAB bonus?
    if (user.type === move.type) {
      stab = 1.5;
    }

    // Physical or Special?
    if (move.category === Move.categories.physical) {
      //console.log('Physical Attack');
      power = move.power;
      attack = user.attack;
      defense = target.defense;
    } else if (move.category === Move.categories.special) {
      //console.log('Special Attack');
      power = move.power;
      attack = user.specialAttack;
      defense = target.specialDefense;
    }

    // Calculate modifier
    let modifier = stab * type * random;

    // return damage
    return ((((((2 * level) / 5) + 2) * power * attack / defense) / 50) + 2) * modifier;
  }
}

export default Pokemon;
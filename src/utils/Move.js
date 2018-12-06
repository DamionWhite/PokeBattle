class Move {
  constructor(name, type, category, power, accuracy, pp) {
    this.name = name;
    this.type = type;
    this.category = category;
    this.power = power;
    this.accuracy = accuracy;
    this.powerPoints = pp;
    this.currentPowerPoints = this.powerPoints;
  }

  static categories = {
    physical: 'physical',
    special: 'special',
    status: 'status'
  }
}

export default Move;
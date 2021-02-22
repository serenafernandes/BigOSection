class Player {
  constructor (name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name} I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`WEEEE I'm a ${this.type}`);
  }
}

const wiz1 = new Wizard('Shelly', 'Healer');
const wiz2 = new Wizard('Shawn', 'Dark Magic');
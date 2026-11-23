// Ini Tugas

class Enemy {
  health: number;

  constructor(health: number) {
    this.health = health;
  }

  baseHealth(): number {
    return this.health;
  }
}

class Minions extends Enemy {
  constructor(health: number) {
    super(health);
  }

  baseHealth(): number {
    return (this.health += 30);
  }
}

class MinionFighter extends Enemy {
  constructor(health: number) {
    super(health);
  }

  baseHealth(): number {
    return (this.health += 50);
  }
}

class MinionArcher extends Enemy {
  constructor(health: number) {
    super(health);
  }

  baseHealth(): number {
    return (this.health += 40);
  }
}

class MinionMage extends Enemy {
  constructor(health: number) {
    super(health);
  }

  baseHealth(): number {
    return (this.health += 45);
  }
}

class SuperMinion extends Enemy {
  constructor(health: number) {
    super(health);
  }

  baseHealth(): number {
    return (this.health += 100);
  }
}

class Lord extends Enemy {
  constructor(health: number) {
    super(health);
  }

  baseHealth(): number {
    return (this.health += 500);
  }
}

class Turtle extends Enemy {
  constructor(health: number) {
    super(health);
  }

  baseHealth(): number {
    return (this.health += 300);
  }
}

class RedDragon extends Enemy {
  constructor(health: number) {
    super(health);
  }

  baseHealth(): number {
    return (this.health += 200);
  }
}

class BlueWolf extends Enemy {
  constructor(health: number) {
    super(health);
  }

  baseHealth(): number {
    return (this.health += 150);
  }
}

const minion = new Minions(10);
console.log(minion.baseHealth());

const minionFighter = new MinionFighter(10);
console.log(minionFighter.baseHealth());

const minionArcher = new MinionArcher(10);
console.log(minionArcher.baseHealth());

const minionMage = new MinionMage(10);
console.log(minionMage.baseHealth());

const superMinion = new SuperMinion(10);
console.log(superMinion.baseHealth());

const lord = new Lord(10);
console.log(lord.baseHealth());

const turtle = new Turtle(10);
console.log(turtle.baseHealth());

const redDragon = new RedDragon(10);
console.log(redDragon.baseHealth());

const blueWolf = new BlueWolf(10);
console.log(blueWolf.baseHealth());
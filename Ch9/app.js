'use strict';

class Enemy {
  constructor(health) {
    this.health = health;
  }

  recieveDamage = function (dmg) {
    this.health -= dmg;
    console.log(`Health: ${this.health}`);
  };
}

class Sword {
  #damage;
  constructor(damage) {
    this.#damage = damage;
  }

  strike(target) {
    target.recieveDamage(this.#damage);
  }
}

class Ork extends Enemy {
  constructor(health) {
    super(health);
  }

  recieveDamage = function (dmg) {
    if (Math.random() < .5) {
      console.log(`Missed`);
      return;
    } else if (this.health <= dmg) {
      this.health = 0;
      console.log(`Ork is died`);
      return;
    }
    this.health -= dmg;
    console.log(`Ork health: ${this.health}`);
  };
}

const sword = new Sword(35);
const ork = new Ork(100);

console.log(ork);

sword.strike(ork);
sword.strike(ork);
sword.strike(ork);

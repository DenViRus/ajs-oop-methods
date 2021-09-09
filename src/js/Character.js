export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Error: incorrect name');
    }

    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (typeof type !== 'string' || !types.includes(type)) {
      throw new Error('Error: incorrect type');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}

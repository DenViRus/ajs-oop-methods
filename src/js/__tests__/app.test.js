import {
  Character,
  Bowman,
  Swordsman,
  Magician,
  Undead,
  Zombie,
  Daemon,
} from '../app.js';

test('Bowman inherit from Character', () => {
  expect(new Bowman('John', 'Bowman')).toBeInstanceOf(Character);
});
test('Create new Bowman', () => {
  const received = new Bowman('John', 'Bowman');
  const expected = {
    name: 'John',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(received).toEqual(expected);
});
test('ErrorName1', () => {
  expect(() => {
    const badBowman = new Bowman(33, 'Bowman');
    return badBowman;
  }).toThrow();
});
test('ErrorName2', () => {
  expect(() => {
    const badBowman = new Bowman('Y', 'Bowman');
    return badBowman;
  }).toThrow();
});
test('ErrorType', () => {
  expect(() => {
    const badBowman = new Bowman('Luc', 'Crossbowman');
    return badBowman;
  }).toThrow();
});

test('Swordsman inherit from Character ', () => {
  expect(new Swordsman('Richard', 'Swordsman')).toBeInstanceOf(Character);
});
test('Create new Swordsman', () => {
  const received = new Swordsman('Richard', 'Swordsman');
  const expected = {
    name: 'Richard',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(received).toEqual(expected);
});
test('ErrorName3', () => {
  expect(() => {
    const badSwordsman = new Swordsman(44, 'Swordsman');
    return badSwordsman;
  }).toThrow();
});
test('ErrorName4', () => {
  expect(() => {
    const badSwordsman = new Bowman('X', 'Swordsman');
    return badSwordsman;
  }).toThrow();
});
test('ErrorType2', () => {
  expect(() => {
    const badSwordsman = new Bowman('Bla', 'Spearman');
    return badSwordsman;
  }).toThrow();
});

test('Magician inherit from Character ', () => {
  expect(new Magician('Merlin', 'Magician')).toBeInstanceOf(Character);
});
test('Create new Magician', () => {
  const received = new Magician('Merlin', 'Magician');
  const expected = {
    name: 'Merlin',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(received).toEqual(expected);
});

test('Undead inherit from Character ', () => {
  expect(new Undead('Duncan', 'Undead')).toBeInstanceOf(Character);
});
test('Create new Undead', () => {
  const received = new Undead('Duncan', 'Undead');
  const expected = {
    name: 'Duncan',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(received).toEqual(expected);
});

test('Zombie inherit from Character ', () => {
  expect(new Zombie('Sean', 'Zombie')).toBeInstanceOf(Character);
});
test('Create new Zombie', () => {
  const received = new Zombie('Sean', 'Zombie');
  const expected = {
    name: 'Sean',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(received).toEqual(expected);
});

test('Daemon inherit from Character ', () => {
  expect(new Daemon('Rex', 'Daemon')).toBeInstanceOf(Character);
});
test('Create new Daemon', () => {
  const received = new Daemon('Rex', 'Daemon');
  const expected = {
    name: 'Rex',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(received).toEqual(expected);
});

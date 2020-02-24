import Character from '../character';


test('Creating Bowman', () => {
  const recieved = new Character('Name', 'Bowman');
  const expected = {
    name: 'Name',
    type: 'Bowman',
  };
  expect(recieved).toEqual(expected);
});

test('Creating Swordsman', () => {
  const recieved = new Character('Name', 'Swordsman');
  const expected = {
    name: 'Name',
    type: 'Swordsman',
  };
  expect(recieved).toEqual(expected);
});

test('Creating Magician', () => {
  const recieved = new Character('Name', 'Magician');
  const expected = {
    name: 'Name',
    type: 'Magician',
  };
  expect(recieved).toEqual(expected);
});

test('Creating Undead', () => {
  const recieved = new Character('Name', 'Undead');
  const expected = {
    name: 'Name',
    type: 'Undead',
  };
  expect(recieved).toEqual(expected);
});

test('Creating Zombie', () => {
  const recieved = new Character('Name', 'Zombie');
  const expected = {
    name: 'Name',
    type: 'Zombie',
  };
  expect(recieved).toEqual(expected);
});

test('Creating Daemon', () => {
  const recieved = new Character('Name', 'Daemon');
  const expected = {
    name: 'Name',
    type: 'Daemon',
  };
  expect(recieved).toEqual(expected);
});

test('Incorrect parameters', () => {
  function incorrectCharacter() {
    return new Character('incorrectName', 'incorrectType');
  }
  expect(incorrectCharacter).toThrow();
});

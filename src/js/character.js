/**
 * Function-constructor. Creating new characters
 * @param name - name of new character
 * @param type - type of new character
 * @throws creates new Error if name or type is incorrect: name lengtn < 2 or more then 10.
 * Type is not one of them: Bowman, Swordsman, Magician, Daemon, Undead, Zombie
 */


export default function Character(name, type) {
  if (name.length < 2 || name.length > 10 || !['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
    throw new Error('Incorrect character`s parameters');
  }

  this.name = name;
  this.type = type;
}

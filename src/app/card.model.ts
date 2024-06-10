export class Card {
  name: string;
  strength: number;
  agility: number;
  size: number;
  intelligence: number;
  scariness: number;
  image: string;

  constructor(
    name: string,
    strength: number,
    agility: number,
    size: number,
    intelligence: number,
    scariness: number,
    image: string
  ) {
    this.name = name;
    this.strength = strength;
    this.agility = agility;
    this.size = size;
    this.intelligence = intelligence;
    this.scariness = scariness;
    this.image = image;
  }
}
export class SpecialCard {
  name: string;
  description: string;
  image: string;

  constructor(name: string, description: string, image: string) {
    this.name = name;
    this.description = description;
    this.image = image;
  }
}

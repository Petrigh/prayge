import { Injectable } from '@angular/core';
import { God } from '../models/god';

@Injectable({
  providedIn: 'root'
})
export class RandomGodsService {

  private prefixes = ["Omni", "Zephyr", "Aurora", "Eterna"];
  private suffixes = ["sia", "thor", "nix", "us"];
  private domains = ["War", "Love", "Nature", "Death"];
  private appearances = ["ethereal", "monstrous", "celestial", "elemental"];
  private personalities = ["benevolent", "wrathful", "enigmatic", "compassionate"];
  private symbols = ["sword", "rose", "tree", "skull"];
  private worshipers = ["humans", "elves", "dwarves", "monsters"];
  private realms = ["heavenly realm", "underworld", "natural sanctuary", "celestial plane"];
  private avatars = ["copperface", "xenon"];

  constructor() {}

  generateRandomGod(): God {
    const name = this.getRandomName();
    const domain = this.getRandomItem(this.domains);
    const appearance = this.getRandomItem(this.appearances);
    const personality = this.getRandomItem(this.personalities);
    const symbol = this.getRandomItem(this.symbols);
    const worshipers = this.getRandomItem(this.worshipers);
    const realm = this.getRandomItem(this.realms);
    const avatar = this.getRandomItem(this.avatars);
    return new God(name, domain, appearance, personality, symbol, worshipers, realm, avatar);
  }

  private getRandomName(): string {
    const prefix = this.getRandomItem(this.prefixes);
    const suffix = this.getRandomItem(this.suffixes);
    return prefix + suffix;
  }

  private getRandomItem(array: string[]): string {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
}
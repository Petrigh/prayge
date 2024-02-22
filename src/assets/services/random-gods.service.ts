import { Injectable } from '@angular/core';
import { God, Sphere } from '../models/god';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomGodsService {

  private spheres: Sphere[] = [
    {name: "Nature",
    favorites: ["Fishes","Plants"],
    thoughts: "Can't speak, they growl, buzz, click and generally make a varied racket"},
    {name: "Agriculture",
    favorites: ["Food","Fertility","Rain"],
    thoughts: "Constantly looksto the sky for rain"},
    {name: "Art",
    favorites: ["Dances","Music","Paintings","Poetry","Songs"],
    thoughts: "It is decorated with intricate patterns"},
    {name: "Boundries",
    favorites: ["The Coast"],
    thoughts: "The pieces of its body are carefully separated by markings"},
    {name: "Chaos",
    favorites: ["War", "Gambling"],
    thoughts: "It spins wildly, lurching and howling"},
    {name: "Copper",
    favorites: ["Electricity", "Economics", "Weapons", "Medicine"],
    thoughts: "Its skin oxidices when they cry"}
  ]
  private gods = [
    {name: "Copperface",
    domain: "Copper",
    worshipers: "Dwarves",
    avatar: "copperface"
    }
  ];

  constructor() {}

  generateRandomGod(): God {
    const god = this.getRandomItem(this.gods);
    const sphere = this.spheres.filter((sphere) => sphere.name == god.domain);
    return new God(god.name, god.domain, sphere[0], god.worshipers, god.avatar);
  }

  private getRandomItem(array: any[]): any {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
}
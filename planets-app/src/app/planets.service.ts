import { Injectable } from '@angular/core';
import { Planet } from "./planet"


@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  

  planets: Planet[] = [
    new Planet ("Sun", 0, 0),
    new Planet ("Mercury", 0, 57.9),
    new Planet ("Venus", 0, 108.2),
    new Planet ("Earth", 0, 149.6),
    new Planet ("Mars", 0, 227.9),
    new Planet ("Jupiter", 0, 778.3),
    new Planet ("Saturn", 0, 1427.0),
    new Planet ("Uranus", 0, 2871.0),
    new Planet ("Neptune", 0, 4497.1),
    new Planet ("Pluto", 0, 5913.0),
  ]
  

  constructor() { }

  
  
///is this the same as create planet?
 /*  addPlanet(){

  } */

  distanceSortSun(){
    this.planets.sort((a, b) => (a.distancefromSun < b.distancefromSun) ? -1: 1);
  }

  createPlanet(planet: Planet){
    this.planets.push(planet);
  }

  //delete sun needs to go in here
}

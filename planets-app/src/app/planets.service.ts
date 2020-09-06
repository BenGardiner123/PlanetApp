import { Injectable } from '@angular/core';
import { Planet } from "./planet"


@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  

  planets: Planet[] = [
    new Planet ("Sun", 0, 0, "https://i.ibb.co/V9rf0QT/theSun.jpg"),
    new Planet ("Mercury", 0, 57.9, "https://i.ibb.co/phDJdnq/Mercury.jpg"),
    new Planet ("Venus", 0, 108.2, "https://i.ibb.co/WPn6zcr/venus.jpg"),
    new Planet ("Earth", 1, 149.6, "https://i.ibb.co/4ZJwJr7/earth.jpg"),
    new Planet ("Mars", 2, 227.9, "https://i.ibb.co/0KdBp7x/Mars.jpg"),
    new Planet ("Jupiter", 79, 778.3, "https://i.ibb.co/5sfytsm/Jupiter.jpg"),
    new Planet ("Saturn", 53, 1427.0, "https://i.ibb.co/dMcsbXw/Saturn.jpg"),
    new Planet ("Uranus", 27, 2871.0, "https://i.ibb.co/XXn61tK/Uranus.jpg"),
    new Planet ("Neptune", 14, 4497.1, "https://i.ibb.co/tXtZ4RV/Neptune.jpg"),
    new Planet ("Pluto", 5, 5913.0, "https://i.ibb.co/58kBPrS/Pluto.jpg"),
  ]
  

  constructor() { }

  sortPlanets(){
    this.planets.sort((a, b) => (a.distancefromSun < b.distancefromSun) ? -1: 1);
  }


  createPlanet(planet: Planet){
    this.planets.push(planet);
    this.planets.sort((a, b) => (a.distancefromSun < b.distancefromSun) ? -1: 1);
  }

  deletePlanet(planet: Planet){
    let thisPlanettoRemove = this.planets.indexOf(planet)
    this.planets.splice(thisPlanettoRemove, 1)
  }

  
}

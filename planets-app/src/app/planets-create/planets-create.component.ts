import { PlanetsService } from './../planets.service';
import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';

@Component({
  selector: 'app-planets-create',
  templateUrl: './planets-create.component.html',
  styleUrls: ['./planets-create.component.css']
})
export class PlanetsCreateComponent implements OnInit {

  constructor(public planetService: PlanetsService) { }

  ngOnInit(): void {
  }

  createPlanet(name: string, moons:number, distToSun:number, imgUrl: string){
    this.planetService.createPlanet(new Planet(name, moons, distToSun, imgUrl));
    
  }
}

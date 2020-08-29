import { Component, OnInit, Input } from '@angular/core';
import { Planet } from '../planet';
import { PlanetsService } from '../planets.service';




@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {

@Input()
planet: Planet;

constructor(public planetService: PlanetsService) { 
  
}

ngOnInit(): void {
}

deletePlanet(planet: Planet){{
  this.planetService.deletePlanet(planet);
}}
 

}

import { Component, OnInit, Input } from '@angular/core';
import { Planet } from '../planet';


//add the service here to delete the planet

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {

@Input()
planet: Planet;

constructor(planet: Planet) { 
  this.planet = planet;
}

ngOnInit(): void {
}

  
  // need to add a delete planet into this htrough the service

  // add edit the values of each planet

}

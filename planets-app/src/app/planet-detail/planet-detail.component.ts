import { PlanetsListComponent } from './../planets-list/planets-list.component';
import { PlanetsService } from './../planets.service';
import { Component, OnInit, Input } from '@angular/core';


//add the service here to delete the planet

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {

  @Input()
 planetService:PlanetsService;

  constructor() { }

  ngOnInit(): void {
  }

  
  // need to add a delete planet into this htrough the service

  // add edit the values of each planet

}

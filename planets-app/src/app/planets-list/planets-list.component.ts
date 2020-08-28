import { PlanetDetailComponent } from './../planet-detail/planet-detail.component';
import { PlanetsService } from '../planets.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {
  
  planetService: PlanetsService;

  constructor(public planetservice: PlanetsService) { 
    this.planetService = planetservice;
  }

  ngOnInit(): void {
  }

  
  

}

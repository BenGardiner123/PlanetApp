import { PlanetsService } from './planets.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'planets-app';
  public planetsService = PlanetsService;

  constructor(planetService: PlanetsService){
    this.planetsService = PlanetsService;
  }
}

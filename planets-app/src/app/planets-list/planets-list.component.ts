import { PlanetsService } from './../planets.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {
  
  

  constructor(public planetservice: PlanetsService) { 
    
  }

  ngOnInit(): void {
  }

  // this will show every compnent of evry plane tas part of the service
  

}

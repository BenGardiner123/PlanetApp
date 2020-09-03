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

editing: boolean = false;
placeholder:string = '';
moonHolder: number;
distHolder: number;
editingfield: string;

constructor(public planetService: PlanetsService) { 
  
}

ngOnInit(): void {
}

selectName(){
  this.editingfield = "name";
  this.editing = true;
  this.placeholder = this.planet.name;
  
}
selectMoons(){
  let moons = 0;
  this.editing = true;
  moons = this.planet.moons;
  this.placeholder = moons.toString()
  
}

selectDist(){
  let dist = 0;
  this.editing = true;
  dist = this.planet.distancefromSun;
  this.placeholder = dist.toString();
  
}


deletePlanet(planet: Planet){
  this.planetService.deletePlanet(planet);
}
 
beginEdit(){
  this.editing = true;
}

stopEdit(value:string){
  if(this.editingfield == "name")
  {
    this.planet.name  = this.placeholder
  }
  this.editing = false;
}

/* updatePlanetName($event: Event ){
  this.planet.name = (<HTMLInputElement>event.target).value;
} 

updatePlanetMoons($event: Event ){
  var input = parseInt((<HTMLInputElement>event.target).value);
  this.planet.moons = input;
}

updatePlanetDist($event: Event ){
  var input = parseInt((<HTMLInputElement>event.target).value);
  this.planet.distancefromSun = input;
 
} */

}

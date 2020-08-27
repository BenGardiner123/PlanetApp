export class  Planet {
    name: string
    moons: number
    distancefromSun: number 
    
    constructor(name: string, moons: number, distancefromSun: number){
        this.distancefromSun = distancefromSun;
        this.moons = moons;
        this.name = name;

    }


}
export class  Planet {
    name: string
    moons: number
    distancefromSun: number 
    imgUrl: string
    
    constructor(name: string, moons: number, distancefromSun: number, imgUrl: string){
        this.distancefromSun = distancefromSun;
        this.moons = moons;
        this.name = name;
        this.imgUrl = imgUrl;
    }


}
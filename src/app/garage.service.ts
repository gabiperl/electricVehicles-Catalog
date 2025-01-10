import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GarageService {
  // private saludo= "Hola desde el servicio";
  private myVehicles:any[] = [];
  constructor() {}

  addToMyVehicles(vehicle:any){
    this.myVehicles.push(vehicle);
  }

  getMyVehicles(){
    return this.myVehicles;
  }

  // getSaludo() 
  // {return this.saludo;}
}

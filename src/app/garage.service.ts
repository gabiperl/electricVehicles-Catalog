import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GarageService {
  // private saludo= "Hola desde el servicio";
  private myVehicles:any[] = [];
  constructor() {
    if (localStorage.getItem('myVehicles'))
    {
      this.myVehicles = JSON.parse(localStorage.getItem('myVehicles') || '[]');
    }
  }

  addToMyVehicles(vehicle:any)
  {
    if (!this.isAlreadyInMyGarage(vehicle) )
    {
      this.myVehicles.push(vehicle);
      localStorage.setItem('myVehicles', JSON.stringify(this.myVehicles));
    }
    else
    this.myVehicles.push(vehicle);
  }

  isAlreadyInMyGarage(vehicle:any)
  {
    return this.myVehicles.find(v => v.id == vehicle.id);
  }

  getMyVehicles()
  {
    return this.myVehicles;
  }

  removeVehicleFromGarage(vehicle:any)
  {
    this.myVehicles = this.myVehicles.filter(v => v.id != vehicle.id);
    localStorage.setItem('myVehicles', JSON.stringify(this.myVehicles));

    // let posicion = this.myVehicles.findIndex(v => v.id == vehicle.id);
    // this.myVehicles.splice(posicion, 1);
  }

  // getSaludo() 
  // {return this.saludo;}
}

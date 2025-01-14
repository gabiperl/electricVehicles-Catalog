import { Component, Input } from '@angular/core';
import { GarageService } from '../garage.service';

@Component({
  selector: 'app-vehicle-card',
  imports: [],
  templateUrl: './vehicle-card.component.html',
  styles: ``
})

export class VehicleCardComponent {
@Input() vehicle:any;

constructor(private garageSrvc:GarageService) { }

addVehicleToGarage(aVehicle:any){
  this.garageSrvc.addToMyVehicles(aVehicle);
}

isAlreadyInMyGarage(vehicle:any)
{
  return this.garageSrvc.isAlreadyInMyGarage(vehicle);
}

removeVehicleFromGarage(vehicle:any)
{
  this.garageSrvc.removeVehicleFromGarage(vehicle);
}

}



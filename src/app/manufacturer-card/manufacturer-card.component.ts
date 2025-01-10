import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-manufacturer-card',
  imports: [],
  templateUrl: './manufacturer-card.component.html',
  styles: `
  .card
  {
    
    height: 250px;
    display: flex;
  }

  .card-title
  {
    display: flex;
    justify-content: center;
  }

  `
})
export class ManufacturerCardComponent {
@Input() manufacturer:any;

}

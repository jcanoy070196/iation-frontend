import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './car.component';
import { CarModalComponent } from './components/car-modal/car-modal.component';


@NgModule({
  declarations: [CarComponent, CarModalComponent],
  imports: [
    CommonModule,
    CarRoutingModule
  ]
})
export class CarModule { }

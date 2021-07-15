import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarModelRoutingModule } from './car-model-routing.module';
import { CarModelComponent } from './car-model.component';
import { CarModelModalComponent } from './components/car-model-modal/car-model-modal.component';


@NgModule({
  declarations: [CarModelComponent, CarModelModalComponent],
  imports: [
    CommonModule,
    CarModelRoutingModule
  ]
})
export class CarModelModule { }

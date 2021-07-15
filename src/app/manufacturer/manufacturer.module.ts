import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManufacturerRoutingModule } from './manufacturer-routing.module';
import { ManufacturerComponent } from './manufacturer.component';
import { ManufacturerModalComponent } from './components/manufacturer-modal/manufacturer-modal.component';


@NgModule({
  declarations: [ManufacturerComponent, ManufacturerModalComponent],
  imports: [
    CommonModule,
    ManufacturerRoutingModule,
  ]
})
export class ManufacturerModule { }

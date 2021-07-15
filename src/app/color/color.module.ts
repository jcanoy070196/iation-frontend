import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorRoutingModule } from './color-routing.module';
import { ColorComponent } from './color.component';
import { ColorModalComponent } from './components/color-modal/color-modal.component';


@NgModule({
  declarations: [ColorComponent, ColorModalComponent],
  imports: [
    CommonModule,
    ColorRoutingModule
  ]
})
export class ColorModule { }

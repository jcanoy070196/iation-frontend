import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'car', loadChildren: () => import('./car/car.module').then(m => m.CarModule) }, 
  { path: 'manufacturer', loadChildren: () => import('./manufacturer/manufacturer.module').then(m => m.ManufacturerModule) }, 
  { path: 'car-model', loadChildren: () => import('./car-model/car-model.module').then(m => m.CarModelModule) }, 
  { path: 'color', loadChildren: () => import('./color/color.module').then(m => m.ColorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardetailsPage } from './cardetails';

@NgModule({
  declarations: [
    CardetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CardetailsPage),
  ],
})
export class CardetailsPageModule {}

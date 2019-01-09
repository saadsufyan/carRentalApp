import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationselectPage } from './locationselect';

@NgModule({
  declarations: [
    LocationselectPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationselectPage),
  ],
})
export class LocationselectPageModule {}

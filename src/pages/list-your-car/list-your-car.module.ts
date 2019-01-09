import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListYourCarPage } from './list-your-car';

@NgModule({
  declarations: [
    ListYourCarPage,
  ],
  imports: [
    IonicPageModule.forChild(ListYourCarPage),
  ],
})
export class ListYourCarPageModule {}

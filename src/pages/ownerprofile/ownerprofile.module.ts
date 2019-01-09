import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OwnerprofilePage } from './ownerprofile';

@NgModule({
  declarations: [
    OwnerprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(OwnerprofilePage),
  ],
})
export class OwnerprofilePageModule {}

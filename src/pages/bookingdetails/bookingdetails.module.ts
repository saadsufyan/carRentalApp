import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingdetailsPage } from './bookingdetails';

@NgModule({
  declarations: [
    BookingdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BookingdetailsPage),
  ],
})
export class BookingdetailsPageModule {}

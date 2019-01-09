import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MyBookingsPage } from '../my-bookings/my-bookings';
import { NotificationsPage } from '../notifications/notifications';
import { ChatPage } from '../chat/chat';
import { ListYourCarPage } from '../list-your-car/list-your-car';
import { SearchPage } from '../search/search';
import { MyprofilePage } from '../myprofile/myprofile';
import { BookingconfirmationPage } from '../bookingconfirmation/bookingconfirmation';
import { CalendarComponentOptions } from 'ion2-calendar'
import { LocationselectPage } from '../locationselect/locationselect';
import { SearchresultsPage } from '../searchresults/searchresults';



/**
 * Generated class for the BookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
const now = new Date();

@IonicPage()
@Component({
  selector: 'page-bookings',
  templateUrl: 'bookings.html',
})
export class BookingsPage {

  date: any;
  dateRange: { 
    from: string; 
    to: string; 
  };
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'range'
  };
  public lat : any 
  public long : any
  public locationname : any

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, public events: Events, public modalCtrl : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingsPage');
    

  }
  ionViewWillEnter(){ 
    this.viewCtrl.showBackButton(false)
  }
  goToHome(){
    this.navCtrl.push(HomePage,{animation: 'left'})
  }
  goTomyBookings(){
    this.navCtrl.push(MyBookingsPage, {animation: 'left'})
  }
  goToNotifications(){
    this.navCtrl.push(NotificationsPage, {animation: 'left'})
  }
  goToChat(){
    this.navCtrl.push(ChatPage, {animation: 'left'})
  }
  goToListYourCar(){
    this.navCtrl.push(ListYourCarPage,{animation: 'left'})
  }
  goToSearch(){
    this.navCtrl.push(SearchPage, {animation: 'left'})
  }
  goToMyprofile(){
    this.navCtrl.push(MyprofilePage)
  }
  goToSearchResults(status){
    this.navCtrl.push(SearchresultsPage)
  }
  onClickSearchIcon(onSearch){
    this.navCtrl.push(HomePage, {onSearch: onSearch})
  }

  goToBookingConfirmation(){
    console.log(this.dateRange)
    // var a = new Date(this.date.to).getTime()/1000
    // var b = new Date(this.date.from).getTime()/1000
    // console.log(a)
    // console.log(b)
    this.navCtrl.push(BookingconfirmationPage)
  }

  launchLocationPage(){
 
    let modal = this.modalCtrl.create(LocationselectPage);
  
    modal.onDidDismiss((location) => {
        console.log(location);
        if(location !=null){
          this.lat = location.lat
          this.long = location.lng 
          this.locationname = location.name
        }
  
  
        console.log(this.lat + " --- "  + this.long)
    });
  
    modal.present();   
  
  }

}

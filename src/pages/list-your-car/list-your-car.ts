import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MyBookingsPage } from '../my-bookings/my-bookings';
import { NotificationsPage } from '../notifications/notifications';
import { ChatPage } from '../chat/chat';
import { SearchPage } from '../search/search';
import { MyprofilePage } from '../myprofile/myprofile';
import { Listyourcar2Page } from '../listyourcar2/listyourcar2';
import { LocationselectPage } from '../locationselect/locationselect';
import { SearchresultsPage } from '../searchresults/searchresults';
import { Listyourcar3Page } from '../listyourcar3/listyourcar3';

/**
 * Generated class for the ListYourCarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-your-car',
  templateUrl: 'list-your-car.html',
})
export class ListYourCarPage {

  public startDate
  public endDate
  public lat 
  public long 
  public locationname
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, public modalCtrl : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListYourCarPage');
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
    this.navCtrl.push(Listyourcar2Page,{animation: 'left'})
  }
  goToSearch(){
    this.navCtrl.push(SearchPage, {animation: 'left'})
  }
  goToMyprofile(){
    this.navCtrl.push(MyprofilePage)
  }
  goToList3(){
    this.navCtrl.push(Listyourcar3Page)
    // this.testingDateTime()
  }
  goToSearchResults(status){
    this.navCtrl.push(SearchresultsPage)
  }
  onClickSearchIcon(onSearch){
    this.navCtrl.push(HomePage, {onSearch: onSearch})
  }
  testingDateTime(){
    console.log(this.startDate)
    console.log(this.endDate)

    var date = new Date(this.startDate).getTime() / 1000
    console.log(date)
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

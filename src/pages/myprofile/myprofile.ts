import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MyBookingsPage } from '../my-bookings/my-bookings';
import { NotificationsPage } from '../notifications/notifications';
import { ChatPage } from '../chat/chat';
import { ListYourCarPage } from '../list-your-car/list-your-car';
import { SearchPage } from '../search/search';
import { LocationselectPage } from '../locationselect/locationselect';
import { SearchresultsPage } from '../searchresults/searchresults';
import { Listyourcar2Page } from '../listyourcar2/listyourcar2';

/**
 * Generated class for the MyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html',
})
export class MyprofilePage {

  public lat : any
  public long : any
  public locationname : string = "Address"

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, public modalCtrl  : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyprofilePage');
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
  goToSearchResults(status){
    this.navCtrl.push(SearchresultsPage)
  }

  onClickSearchIcon(onSearch){
    this.navCtrl.push(HomePage, {onSearch: onSearch})
  }
  launchLocationPage(text){
 
    let modal = this.modalCtrl.create(LocationselectPage,{text: text});
  
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

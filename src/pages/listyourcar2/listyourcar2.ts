import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MyBookingsPage } from '../my-bookings/my-bookings';
import { NotificationsPage } from '../notifications/notifications';
import { ChatPage } from '../chat/chat';
import { ListYourCarPage } from '../list-your-car/list-your-car';
import { SearchPage } from '../search/search';
import { MyprofilePage } from '../myprofile/myprofile';
import { Listyourcar3Page } from '../listyourcar3/listyourcar3';
import { LocationselectPage } from '../locationselect/locationselect';
import { SearchresultsPage } from '../searchresults/searchresults';

/**
 * Generated class for the Listyourcar2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listyourcar2',
  templateUrl: 'listyourcar2.html',
})
export class Listyourcar2Page {

  public lat 
  public long 
  public locationname
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, public modalCtrl : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Listyourcar2Page');
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
  goToList2(){
    this.navCtrl.push(ListYourCarPage)
  }
  goToSearchResults(status){
    this.navCtrl.push(SearchresultsPage)
  }
  onClickSearchIcon(onSearch){
    this.navCtrl.push(HomePage, {onSearch: onSearch})
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

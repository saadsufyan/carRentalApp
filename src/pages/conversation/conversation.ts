import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { MyprofilePage } from '../myprofile/myprofile';
import { LocationselectPage } from '../locationselect/locationselect';
import { SearchresultsPage } from '../searchresults/searchresults';
import { Listyourcar2Page } from '../listyourcar2/listyourcar2';
import { ChatPage } from '../chat/chat';
import { NotificationsPage } from '../notifications/notifications';
import { MyBookingsPage } from '../my-bookings/my-bookings';
import { HomePage } from '../home/home';
import { CardetailsPage } from '../cardetails/cardetails';

/**
 * Generated class for the ConversationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conversation',
  templateUrl: 'conversation.html',
})
export class ConversationPage {

  public lat : any
  public long : any
  public locationname : any

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, public modalCtrl : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConversationPage');
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

  goToSearchResults(status){
    this.navCtrl.push(SearchresultsPage)
  }
  goToMyprofile(){
    this.navCtrl.push(MyprofilePage)
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

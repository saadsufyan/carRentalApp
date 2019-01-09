import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MyBookingsPage } from '../my-bookings/my-bookings';
import { NotificationsPage } from '../notifications/notifications';
import { ListYourCarPage } from '../list-your-car/list-your-car';
import { SearchPage } from '../search/search';
import { MyprofilePage } from '../myprofile/myprofile';
import { ConversationPage } from '../conversation/conversation';
import { LocationselectPage } from '../locationselect/locationselect';
import { SearchresultsPage } from '../searchresults/searchresults';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  public lat : any
  public long : any
  public locationname : any

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, public modalCtrl : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
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

  goToSearchResults(status){
    this.navCtrl.push(SearchresultsPage)
  }
  goToMyprofile(){
    this.navCtrl.push(MyprofilePage)
  }
  goToConversations(){
    this.navCtrl.push(ConversationPage)
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

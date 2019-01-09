import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, Slides, MenuController } from 'ionic-angular';
import { MyBookingsPage } from '../my-bookings/my-bookings';
import { NotificationsPage } from '../notifications/notifications';
import { ChatPage } from '../chat/chat';
import { ListYourCarPage } from '../list-your-car/list-your-car';
import { Ionic2RatingModule } from "ionic2-rating";
import { LocationselectPage } from '../locationselect/locationselect';
import { SearchPage } from '../search/search';
import { MyprofilePage } from '../myprofile/myprofile';
import { Common } from '../../common/common';
import { CardetailsPage } from '../cardetails/cardetails';
import { UserprofilePage } from '../userprofile/userprofile';
import { RentalprofilePage } from '../rentalprofile/rentalprofile';
import * as $ from 'jquery';
import 'slick-carousel/slick/slick';
import { SearchresultsPage } from '../searchresults/searchresults';
import { Listyourcar2Page } from '../listyourcar2/listyourcar2';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild('slides') slides: Slides;
  public lat;
  public long;
  public date;
  public search :boolean = false;
  public showSearchBar : any

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, public commonservice: Common, public menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.testingTimestamp()
    
  }
  ionViewWillEnter(){ 
    this.viewCtrl.showBackButton(false);
    // this.menu.swipeEnable(true);

   this.showSearchBar = this.navParams.get('onSearch')
   console.log(this.showSearchBar)
   if(this.showSearchBar == "searchBar"){
    this.search = true
   }
  }

  goToHome(){
    this.navCtrl.push(HomePage)
  }
  goTomyBookings(){
    this.navCtrl.push(MyBookingsPage)
  }
  goToNotifications(){
    this.navCtrl.push(NotificationsPage)
  }
  goToChat(){
    this.navCtrl.push(ChatPage)
  }
  goToListYourCar(){
    this.navCtrl.push(Listyourcar2Page)
  }
  goToSearch(){
    console.log("search clicked")
    this.navCtrl.push(SearchPage, {animation: 'left'})
  }
  goToMyprofile(){
    this.navCtrl.push(MyprofilePage)
  }

  goToCarDetails(){
    this.navCtrl.push(CardetailsPage)
  }
  goToUserProfile(){
    this.navCtrl.push(UserprofilePage)
  }

  goToRentalProfile(){
    this.navCtrl.push(RentalprofilePage)
  }
  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }
  showSearchIcon(){
    console.log(this.search)
    this.search == true ? this.search = false : this.search = true
  }

  // createSlick(){
  //   $('.slider-for').slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: true,
  //     fade: true,
  //     asNavFor: '.slider-nav'
  //   });
  //   $('.slider-nav').slick({
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     asNavFor: '.slider-for',
  //     dots: false,
  //     arrows: true,
  //     focusOnSelect: true
  //   });
 
  //   $('a[data-slide]').click(function(e) {
  //     e.preventDefault();
  //     var slideno = $(this).data('slide');
  //     $('.slider-nav').slick('slickGoTo', slideno - 1);
  //   });

  // }
  launchLocationPage(){
 
    let modal = this.modalCtrl.create(LocationselectPage);
  
    modal.onDidDismiss((location) => {
        console.log(location);
        if(location !=null){
          this.lat = location.lat
          this.long = location.lng 
        }
  
  
        console.log(this.lat + " --- "  + this.long)
    });
  
    modal.present();   
  
  }

  testingTimestamp(){

    var a = '1544610142'

    this.date = this.commonservice.getDate(a)
    var time = this.commonservice.getTime(a)
    console.log(this.date)
    console.log(time)
  }

  searchText(search){
    console.log(search)
    this.navCtrl.push(SearchresultsPage)
  }
}

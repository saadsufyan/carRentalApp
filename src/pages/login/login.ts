import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, MenuController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { LoginService } from '../../services/login';
import { NetworkService } from '../../services/network';
import { AlertView } from '../../uicomponents/alert';
import { LocationselectPage } from '../locationselect/locationselect';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginService , AlertView, NetworkService]
})
export class LoginPage {

  public errorMessage : any
  public lat: any
  public long: any
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, public loginservice : LoginService, public popup : AlertView, public modalCtrl : ModalController, public menu : MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  }
  ionViewWillEnter(){ 
    this.viewCtrl.showBackButton(false)
    this.menu.swipeEnable(false)
  }
  goToSignup(){
    this.navCtrl.push(SignupPage, {animation: 'left'})
  }
  goToHome(){
    this.navCtrl.push(HomePage, {animation: 'left'})
  }

  userLogin(email,password){
    console.log(email, password)
    if(email != undefined && password != undefined){
      this.popup.showLoader()
      //this.showLoading()
      let data = {
        "email": email,
        "password": password
      }
      this.loginservice.onUserLogin(data).subscribe(res => {
      this.popup.hideLoader()
      if(res.status){
        console.log(res)
        localStorage.setItem('user' , JSON.stringify(res.response))
        localStorage.setItem('isLoggedIn', "true")
        console.log(localStorage)
        this.navCtrl.setRoot(HomePage , {} , {animation:'left'})
        }
      }, err => {
                // alert(err)
                console.log(err);
                this.popup.hideLoader()
                this.errorMessage = JSON.parse(err._body)
                console.log(this.errorMessage)
                this.errorMessage = this.errorMessage.error.message[0]
                this.popup.showToast(this.errorMessage , 2000 , 'bottom' ,false , "")
      })
    }else {
      // alert("something went wrong")
      this.popup.showToast('Invalid information' , 2000 , 'bottom' ,false , "")
    }
  }
  
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


}

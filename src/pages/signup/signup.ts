import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController, ModalController, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LoginService } from '../../services/login';
import { NetworkService } from '../../services/network';
import { AlertView } from '../../uicomponents/alert';
import { LocationselectPage } from '../locationselect/locationselect';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [LoginService , AlertView, NetworkService]
})
export class SignupPage {
  public errorMessage ;
  public lat;
  public long;
  public locationname : any = "Address";
  public country = "country";
  public city = "city";

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, public loginservice : LoginService, public popup : AlertView, public modalCtrl: ModalController, public menu : MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  ionViewWillEnter(){ 
    this.viewCtrl.showBackButton(false)
    this.menu.swipeEnable(false)
  }
  goToLogin(){
    this.navCtrl.push(LoginPage, {animation: 'left'})
  }
  signupUser(name,email,password,retypepassword,mobilenumber, country, city, nic, license){

    if(name != null && email != null && password !=null && retypepassword !=null && mobilenumber != null){

      if(password == retypepassword){
        this.popup.showLoader()

        let data = {
          "name": name,       
          "email": email,
          "password": password,
          "phone" : mobilenumber,
          "address" : this.locationname,
          "country" : country,
          "city" : city,
          "lat" : this.lat,
          "long" : this.long,
          "nic_number": nic,
          "licence_number": license
        }
  
        console.log(data)
  
        this.loginservice.onUserSignup(data).subscribe(res=>{
          console.log(res)
          this.popup.hideLoader()
  
          localStorage.setItem('user' , JSON.stringify(res.response))
          localStorage.setItem('isLoggedIn', "true")
          console.log(localStorage)
          this.navCtrl.push(HomePage, {animation : 'left'})
          
  
  
        },err=>{
          // alert(err)
          console.log(err);
          this.popup.hideLoader()
          this.errorMessage = JSON.parse(err._body)
          console.log(this.errorMessage)
          this.errorMessage = this.errorMessage.error.message[0]
          this.popup.showToast(this.errorMessage , 1700 , 'bottom' ,false , "")        
        })
      }
      else {
        this.popup.showToast("Password not matched" , 1500 , 'bottom' ,false , "") 
      }

      
    }
    else{
      this.popup.showToast("Please fill all required fields" , 1500 , 'bottom' ,false , "")  
    }
  }


  launchLocationPage(text){
 
    let modal = this.modalCtrl.create(LocationselectPage, {text:text});
  
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

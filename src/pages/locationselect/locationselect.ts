import {  Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams,  Platform, ViewController, MenuController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';
import { SearchPage } from '../search/search';
import { MyprofilePage } from '../myprofile/myprofile';
import { SearchresultsPage } from '../searchresults/searchresults';
import { HomePage } from '../home/home';


/**
 * Generated class for the LocationselectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google; 

@IonicPage()
@Component({
  selector: 'page-locationselect',
  templateUrl: 'locationselect.html',
})
export class LocationselectPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

  latitude: number;
  longitude: number;
  autocompleteService: any;
  placesService: any;
  query: string = '';
  places: any = [];
  searchDisabled: boolean;
  saveDisabled: boolean;
  location: any;

  public showTop : boolean = false;
  public data : any

  constructor(public navCtrl: NavController, public navParams: NavParams, public zone: NgZone, public maps: GoogleMapsProvider, public platform: Platform, public geolocation: Geolocation, public viewCtrl: ViewController, public menu : MenuController) {
    this.searchDisabled = true;
    this.saveDisabled = true;

    this.data = this.navParams.get('text')
    console.log(this.data)
    if(this.data == undefined){
      this.showTop = false;
    }
    else {
      this.showTop = true
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationSelectPage');
    console.log(google)

    let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(() => {
 
      this.autocompleteService = new google.maps.places.AutocompleteService();
      this.placesService = new google.maps.places.PlacesService(this.maps.map);
      this.searchDisabled = false;

  });

  }

  ionViewWillEnter(){
    // this.menu.swipeEnable(true)
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
  goBack(){
      this.navCtrl.pop()
  }
  selectPlace(place){
 
    this.places = [];

    let location = {
        lat: null,
        lng: null,
        name: place.name
    };

    this.placesService = new google.maps.places.PlacesService(this.maps.map);
    this.placesService.getDetails({placeId: place.place_id}, (details) => {

        this.zone.run(() => {

            location.name = details.name;
            location.lat = details.geometry.location.lat();
            location.lng = details.geometry.location.lng();
            this.saveDisabled = false;

            let latLng = new google.maps.LatLng(location.lat, location.lng);
            this.maps.setMap(latLng)

            this.query = place.description 
    
            this.maps.map.setCenter({lat: location.lat, lng: location.lng});
            this.location = location;
        });
    });
  }

  searchPlace(){
  
    this.saveDisabled = true;

    if(this.query.length > 0 && !this.searchDisabled) {

        let config = {
            types: ['geocode'],
            input: this.query
        }

        this.autocompleteService.getPlacePredictions(config, (predictions, status) => {

            if(status == google.maps.places.PlacesServiceStatus.OK && predictions){

                this.places = [];

                predictions.forEach((prediction) => {
                    this.places.push(prediction);
                });
            }

        });

    } else {
        this.places = [];
    }

  }
  save(){
    this.viewCtrl.dismiss(this.location);
  }

  close(){
    this.viewCtrl.dismiss();
  }  
}

import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { ConnectivityServiceProvider } from '../connectivity-service/connectivity-service';
import { Geolocation } from '@ionic-native/geolocation';
import {SharedService} from '../../services/sharedService';



/*
  Generated class for the GoogleMapsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
declare var google; 


@Injectable()
export class GoogleMapsProvider {

  mapElement: any;
  pleaseConnect: any;
  map: any;
  mapInitialised: boolean = false;
  mapLoaded: any;
  mapLoadedObserver: any;
  currentMarker: any;
  apiKey: string = "AIzaSyDiJ0oGy0xy6mcrh0c318mtujMTn_ENrSc";

  constructor(public connectivityService: ConnectivityServiceProvider, public geolocation: Geolocation, public shareservice : SharedService) {
    console.log('Hello GoogleMapsProvider Provider');

  }
  init(mapElement: any, pleaseConnect: any): Promise<any> {
 
    this.mapElement = mapElement;
    this.pleaseConnect = pleaseConnect;
 
    return this.loadGoogleMaps();
 
  }
 
  loadGoogleMaps(): Promise<any> {
 
    return new Promise((resolve) => {
 
      if(typeof google == "undefined" || typeof google.maps == "undefined"){
 
        console.log("Google maps JavaScript needs to be loaded.");
        this.disableMap();
 
        if(this.connectivityService.isOnline()){
 
          window['mapInit'] = () => {
 
            this.initMap().then(() => {
              resolve(true);
            });
 
            this.enableMap();
          }
 
          let script = document.createElement("script");
          script.id = "googleMaps";
 
          if(this.apiKey){
            script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit&libraries=places';
          } else {
            script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';      
          }
 
          document.body.appendChild(script); 
 
        }
      } else {
 
        if(this.connectivityService.isOnline()){
          this.initMap();
          this.enableMap();
        }
        else {
          this.disableMap();
        }
 
        resolve(true);
 
      }
 
      this.addConnectivityListeners();
 
    });
 
  }
 
  initMap(): Promise<any> {
 
    this.mapInitialised = true;
 
    var data :any = this.shareservice.fetchData()

    // console.log(data)

    // console.log(data.lat)
    // console.log(data.long)

    return new Promise((resolve) => {
 
      this.geolocation.getCurrentPosition().then((position) => {

        if(data != null){
          var latLng = new google.maps.LatLng(data.lat, data.long);
        }
        else{
          var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        }
 
        
 
        // let mapOptions = {
        //   center: latLng,
        //   zoom: 15,
        //   mapTypeId: google.maps.MapTypeId.ROADMAP
        // }
 
        // this.map = new google.maps.Map(this.mapElement, mapOptions);

        this.setMap(latLng)

        resolve(true);
 
      });
 
    });
 
  }
 
  disableMap(): void {
 
    if(this.pleaseConnect){
      this.pleaseConnect.style.display = "block";
    }
 
  }
 
  enableMap(): void {
 
    if(this.pleaseConnect){
      this.pleaseConnect.style.display = "none";
    }
 
  }
 
  addConnectivityListeners(): void {
 
    this.connectivityService.watchOnline().subscribe(() => {
 
      setTimeout(() => {
 
        if(typeof google == "undefined" || typeof google.maps == "undefined"){
          this.loadGoogleMaps();
        }
        else {
          if(!this.mapInitialised){
            this.initMap();
          }
 
          this.enableMap();
        }
 
      }, 2000);
 
    });
 
    this.connectivityService.watchOffline().subscribe(() => {
 
      this.disableMap();
 
    });
 
  }


  setMap(latlng){
    let mapOptions = {
    center: latlng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI : true
    }
    this.map = new google.maps.Map(this.mapElement, mapOptions);
    var marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: latlng
    
    });
    var infoWindow = new google.maps.InfoWindow({
    content: "<p>Here I am</p>"
    });
    google.maps.event.addListener(marker, 'click', function () {
    infoWindow.open(this.map, marker);
    });
    
    }  

}
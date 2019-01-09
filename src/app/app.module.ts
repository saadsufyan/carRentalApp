import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { MyBookingsPage } from '../pages/my-bookings/my-bookings';
import { ChatPage } from '../pages/chat/chat';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ListYourCarPage } from '../pages/list-your-car/list-your-car';
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { OwnerprofilePage } from '../pages/ownerprofile/ownerprofile';
import { SearchPage } from '../pages/search/search';
import { UserprofilePage } from '../pages/userprofile/userprofile';

import { Ionic2RatingModule } from 'ionic2-rating';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { CalendarModule } from "ion2-calendar";



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SearchresultsPage } from '../pages/searchresults/searchresults';
import { ConnectivityServiceProvider } from '../providers/connectivity-service/connectivity-service';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationselectPage } from '../pages/locationselect/locationselect';
import {SharedService} from '../services/sharedService';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate/ng2-translate';
import { RentalprofilePage } from '../pages/rentalprofile/rentalprofile';
import { CardetailsPage } from '../pages/cardetails/cardetails';
import { BookingsPage } from '../pages/bookings/bookings';
import { BookingconfirmationPage } from '../pages/bookingconfirmation/bookingconfirmation';
import { BookingdetailsPage } from '../pages/bookingdetails/bookingdetails';
import { MybookingdetailsPage } from '../pages/mybookingdetails/mybookingdetails';
import { Listyourcar2Page } from '../pages/listyourcar2/listyourcar2';
import { Listyourcar3Page } from '../pages/listyourcar3/listyourcar3';
import { AboutPage } from '../pages/about/about';
import { FeedbackPage } from '../pages/feedback/feedback';
import { ConversationPage } from '../pages/conversation/conversation';
import { Common } from '../common/common';


export function createTranslateLoader(http: Http) {  
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    LoginPage,
    SignupPage,
    HomePage,
    MyBookingsPage,
    ChatPage,
    NotificationsPage,
    ListYourCarPage,
    MyprofilePage,
    OwnerprofilePage,
    SearchPage,
    SearchresultsPage,
    LocationselectPage,
    UserprofilePage,
    RentalprofilePage,
    CardetailsPage,
    BookingsPage,
    BookingconfirmationPage,
    BookingdetailsPage,
    MybookingdetailsPage,
    Listyourcar2Page,
    Listyourcar3Page,
    AboutPage,
    FeedbackPage,
    ConversationPage
  ],
  imports: [
    BrowserModule,
    Ionic2RatingModule,
    IonicImageViewerModule,
    CalendarModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),    
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    LoginPage,
    SignupPage,
    HomePage,
    MyBookingsPage,
    ChatPage,
    NotificationsPage,
    ListYourCarPage,
    MyprofilePage,
    OwnerprofilePage,
    SearchPage,
    SearchresultsPage,
    LocationselectPage,
    UserprofilePage,
    RentalprofilePage,
    CardetailsPage,
    BookingsPage,
    BookingconfirmationPage,
    BookingdetailsPage,
    MybookingdetailsPage,
    Listyourcar2Page,
    Listyourcar3Page,
    AboutPage,
    FeedbackPage,
    ConversationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConnectivityServiceProvider,
    GoogleMapsProvider,
    Network,
    Geolocation,
    SharedService,
    Common

  ]
})
export class AppModule {}

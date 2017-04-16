import { Component } from '@angular/core';
import { Geolocation} from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import * as firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  //@ViewChild('nav') nav: NavController;
  isAuthenticated = false;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private geolocation: Geolocation) {
    platform.ready().then(() => {

    /*firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuthenticated = true;
        this.nav.setRoot(this.rootPage);
      } else {

      }
    });*/
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.geolocation.getCurrentPosition().then((resp) => {
         //resp.coords.latitude
         //resp.coords.longitude
        }).catch((error) => {
          console.log('Error getting location', error);
        });

        let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
         // data can be a set of coordinates, or an error (if an error occurred).
         //data.coords.latitude
         //data.coords.longitude
         //console.log(data.coords.latitude);
         //console.log(data.coords.longitude);
        });

    });
  }
}
//Android - AIzaSyDn4CFFQAEBdhwkUCx5bZS2F0lhlb13BzU

//ios - AIzaSyBswvHwGCAYm76QOTQyyc9dCW2DKuz78xw

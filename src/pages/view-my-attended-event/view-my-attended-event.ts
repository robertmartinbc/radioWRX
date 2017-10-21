import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleMaps } from '@ionic-native/google-maps';
//import { Geolocation } from '@ionic-native/geolocation';

import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
//import * as firebase from 'firebase';


declare var google;

@IonicPage()
@Component({
  selector: 'page-view-my-attended-event',
  templateUrl: 'view-my-attended-event.html',
})

export class ViewMyAttendedEvent {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  ionViewDidLoad(){
    this.loadMap();
    console.log('ionViewDidLoad FansViewBandsEventsPage');
  }

  loadMap(){

    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

  redeemedEventTitle: string = this.navParams.get('redeemedEventTitle');
  redeemedBandVenue: string = this.navParams.get('redeemedBandVenue');
  redeemedBandTown: string = this.navParams.get('redeemedBandTown');
  redeemedBandZip: string = this.navParams.get('redeemedBandZip');
  redeemedBandStartDate: string = this.navParams.get('redeemedBandStartDate');
  redeemedTickets: string = this.navParams.get('redeemedTickets');
  redeemedTicketId: string = this.navParams.get('redeemedTicketId');


  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase,
  public googleMaps: GoogleMaps) {
  }
}

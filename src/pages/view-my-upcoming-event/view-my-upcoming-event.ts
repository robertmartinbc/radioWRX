import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { QRRCodeComponent } from 'angualr2-qrcode';

import * as firebase from 'firebase';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

//FIX-ME How do we read the relevant data into a QR Code?

declare var google;

@IonicPage()

@Component({
  selector: 'page-view-my-upcoming-event',
  templateUrl: 'view-my-upcoming-event.html',
})
export class ViewMyUpcomingEvent {

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

    eventTitle: string = this.navParams.get('eventTitle');
    eventBandVenue: string = this.navParams.get('eventBandVenue');
    totalTicketsRequired: string = this.navParams.get('totalTicketsRequired');
    eventBandTown: string = this.navParams.get('eventBandTown');
    eventBandZip: string = this.navParams.get('eventBandZip');
    eventBandStartDate: string = this.navParams.get('eventBandStartDate');
    eventBandStartTime: string = this.navParams.get('eventBandStartTime');
    ticketId: string = this.navParams.get('$key');


  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire,
  public googleMaps: GoogleMaps, public alertCtrl: AlertController) {
  }

}

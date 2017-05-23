import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import * as firebase from 'firebase';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

declare var google;

@Component({
  selector: 'page-fans-view-bands-private-party',
  templateUrl: 'fans-view-bands-private-party.html'
})

export class FansViewBandsPrivatePartyPage {

  privateparty: FirebaseListObservable<any>

  fee: string = this.navParams.get('fee');

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  ionViewDidLoad(){
    this.loadMap();
    console.log('ionViewDidLoad FansViewBandsEventsPage');
    console.log(this.fee);
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
  public partyDetails: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public formBuilder: FormBuilder, public googleMaps: GoogleMaps,
  public af: AngularFire) {

    this.privateparty = af.database.list('/privateparty')

    this.partyDetails = this.formBuilder.group({
      name: ['', Validators.required],
      streetAddress: ['', Validators.required],
      zipCode: ['', Validators.required],
      telNumber: ['', Validators.required]
    });
  }

  logForm() {
    console.log(this.partyDetails.value)
  }
}

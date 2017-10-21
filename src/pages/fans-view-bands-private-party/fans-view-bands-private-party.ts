import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FansViewBandsPortfolioPage } from '../fans-view-bands-portfolio/fans-view-bands-portfolio';
//import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';


declare var google;

class RequestedPrivateParty {
  name: string;
  streetAddress: string;
  zipCode: string;
  telNumber: string;
  userId: string;
}

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
    //console.log(this.fee);
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

  requestedprivateparty: RequestedPrivateParty = new RequestedPrivateParty()

  public partyDetails: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public formBuilder: FormBuilder, public googleMaps: GoogleMaps,
  public af: AngularFireDatabase) {

    this.privateparty = af.list('/privateparty')

    //FIX ME - No clue as to how we write this data to the database.
    this.partyDetails = this.formBuilder.group({
      name: ['', Validators.required],
      streetAddress: ['', Validators.required],
      zipCode: ['', Validators.required],
      telNumber: ['', Validators.required]
    });
  }

  logForm() {
    this.requestedprivateparty.userId = firebase.auth().currentUser.uid;
    this.requestedprivateparty = this.partyDetails.value;
    this.af.list('/requestedprivateparty').push(this.requestedprivateparty);
    //this.requestedprivateparty = new RequestedPrivateParty();
    this.navCtrl.push(FansViewBandsPortfolioPage);
    console.log(this.requestedprivateparty);
  }
}

import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { AngularFire } from 'angularfire2';
import { EditBandsPrivatePartyDetailsPage } from '../edit-bands-private-party-details/edit-bands-private-party-details';

declare var google;

@Component({
  selector: 'page-bands-view-bands-private-party',
  templateUrl: 'bands-view-bands-private-party.html'
})

  export class BandsViewBandsPrivatePartyPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  ionViewDidLoad() {
    this.loadMap();
    console.log('ionViewDidLoad BandsViewBandsPrivatePartyPage');
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

  location: string = this.navParams.get('location');
  fee: string = this.navParams.get('fee');

  public editLocation: any;
  public editFee: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire,
  public googleMaps: GoogleMaps) {}

  goToEditPrivateParty() {
    this.navCtrl.push(EditBandsPrivatePartyDetailsPage, {
      editLocation: this.location,
      editFee: this.fee
    });
  }

}

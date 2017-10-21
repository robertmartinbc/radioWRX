import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SignInModalPage } from '../sign-in-modal/sign-in-modal';
import { FansViewBandsPortfolioPage } from '../fans-view-bands-portfolio/fans-view-bands-portfolio';

import * as firebase from 'firebase';
<<<<<<< HEAD
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
=======
import { AngularFire } from 'angularfire2';
>>>>>>> ed53e018352edb8e447e2bddf46b19e78b786550

declare var google;

class PurchasedTickets {
  eventBandName: string
  eventTitle: string
  eventBandVenue: string
  eventBandTown: string
  eventBandZip: string
  eventBandPrice: string
  totalTicketsRequired: string
  totalTicketAmount: string
  eventBandImage: string
  eventBandStartDate: string
  eventBandStartTime: string
  userId: string
  bandId: string
  eventId
}

@Component({
  selector: 'page-fans-view-bands-events',
  templateUrl: 'fans-view-bands-events.html'
})

export class FansViewBandsEventsPage {

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

  //Declare variables to calculate total ticket price.
  totalTicketsRequired;
  totalTicketAmount;
  ticketPrice: number = 30;
  purchasedtickets: PurchasedTickets = new PurchasedTickets()

  //Check state of user
  isLoggedIn: boolean = false;

  eventTitle: string = this.navParams.get('eventTitle');
  eventVenue: string = this.navParams.get('eventVenue');
  eventTown: string = this.navParams.get('eventTown');
  eventAvailableTickets: string = this.navParams.get('eventAvailableTickets');
  eventTicketPrice: any = this.navParams.get('eventTicketPrice');
  eventZip: string = this.navParams.get('eventZip');
  eventStartTime: string = this.navParams.get('eventStartTime');
  eventStartDate: string = this.navParams.get('eventStartDate');
  eventId: string = this.navParams.get('$key');



  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase,
  public modalCtrl: ModalController, public alertCtrl: AlertController, public geolocation: Geolocation,
  public googleMaps: GoogleMaps) {

  //Check to see if user is logged in
  var _self = this;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user)
      _self.isLoggedIn=true;
    else
      _self.isLoggedIn=false;
  });
}

  //Present Sign Modal for RadioWRX User
  presentSignInModal() {
    var _self = this;
    let modal = this.modalCtrl.create(SignInModalPage);
    modal.present();
    firebase.auth().onAuthStateChanged(function(user) {
      if (user)
        _self.isLoggedIn=true;
      else
        _self.isLoggedIn=false;
    });
  }

  //Set value of tickets required and total ticket amount to be purchased.

  getTicketValue() {
    this.totalTicketsRequired = this.purchasedtickets.totalTicketsRequired
    console.log(this.totalTicketsRequired);
      if(this.totalTicketsRequired === "1") {
        this.totalTicketAmount = this.eventTicketPrice * this.totalTicketsRequired;
        this.purchasedtickets.totalTicketAmount = this.totalTicketAmount;
        this.purchasedtickets.eventTitle = this.eventTitle;
        this.purchasedtickets.eventBandVenue = this.eventVenue;
        this.purchasedtickets.eventBandTown = this.eventTown;
        this.purchasedtickets.eventBandZip = this.eventZip;
        this.purchasedtickets.eventBandStartDate = this.eventStartDate;
        this.purchasedtickets.eventBandStartTime = this.eventStartTime;
        console.log("You are purchasing 1 tickets!" + this.totalTicketAmount);
    } else if(this.totalTicketsRequired === "2") {
        this.totalTicketAmount = this.eventTicketPrice * this.totalTicketsRequired;
        this.purchasedtickets.totalTicketAmount = this.totalTicketAmount;
        this.purchasedtickets.eventTitle = this.eventTitle;
        this.purchasedtickets.eventBandVenue = this.eventVenue;
        this.purchasedtickets.eventBandTown = this.eventTown;
        this.purchasedtickets.eventBandZip = this.eventZip;
        this.purchasedtickets.eventBandStartDate = this.eventStartDate;
        this.purchasedtickets.eventBandStartTime = this.eventStartTime;
        console.log("You are purchasing 2 tickets!" + this.totalTicketAmount);
    } else if(this.totalTicketsRequired === "3") {
        this.totalTicketAmount = this.eventTicketPrice * this.totalTicketsRequired;
        this.purchasedtickets.totalTicketAmount = this.totalTicketAmount;
        this.purchasedtickets.eventTitle = this.eventTitle;
        this.purchasedtickets.eventBandVenue = this.eventVenue;
        this.purchasedtickets.eventBandTown = this.eventTown;
        this.purchasedtickets.eventBandZip = this.eventZip;
        this.purchasedtickets.eventBandStartDate = this.eventStartDate;
        this.purchasedtickets.eventBandStartTime = this.eventStartTime;
        console.log("You are purchasing 3 tickets!" + this.totalTicketAmount);
    } else if(this.totalTicketsRequired === "4") {
        this.totalTicketAmount = this.eventTicketPrice * this.totalTicketsRequired;
        this.purchasedtickets.totalTicketAmount = this.totalTicketAmount;
        this.purchasedtickets.eventTitle = this.eventTitle;
        this.purchasedtickets.eventBandVenue = this.eventVenue;
        this.purchasedtickets.eventBandTown = this.eventTown;
        this.purchasedtickets.eventBandZip = this.eventZip;
        this.purchasedtickets.eventBandStartDate = this.eventStartDate;
        this.purchasedtickets.eventBandStartTime = this.eventStartTime;
        console.log("You are purchasing 4 ticket!" + this.totalTicketAmount);
      }
    }

  submit() {
    this.purchasedtickets.userId = firebase.auth().currentUser.uid;
    this.af.list('/purchasedtickets').push(this.purchasedtickets);
    this.purchasedtickets = new PurchasedTickets();
    this.navCtrl.pop(FansViewBandsPortfolioPage);
  }

  //Present alert advising of integrity of ticket sales
  showIntegrity() {
  let alert = this.alertCtrl.create({
    title: 'Fair Play',
    subTitle: 'To promote integrity, we limit a maximum of 4 tickets per transaction.',
    buttons: ['OK']
  });
  alert.present();
  }

}

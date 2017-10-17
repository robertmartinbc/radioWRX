import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GoogleMaps } from '@ionic-native/google-maps';
//import { Geolocation } from '@ionic-native/geolocation';
//import { QRRCodeComponent } from 'angualr2-qrcode';
import { MyTicketsPage } from '../my-tickets/my-tickets';

import * as firebase from 'firebase';
import { AngularFire } from 'angularfire2';

//FIX-ME How do we read the relevant data into a QR Code?

class RedeemTicket {
//redeemedEventBandName: string
redeemedEventTitle: string
redeemedBandVenue: string
redeemedBandTown: string
redeemedBandZip: string
redeemedBandPrice: string
redeemedTickets: string
redeemedTicketAmount: string
redeemedBandImage: string
redeemedBandStartDate: string
redeemedBandStartTime: string
redeemedTicketId: string
userId: string
bandId: string
eventId
}

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

    redeemedEventTitle: string = this.navParams.get('eventTitle');
    redeemedBandVenue: string = this.navParams.get('eventBandVenue');
    redeemedTickets: string = this.navParams.get('totalTicketsRequired');
    redeemedBandTown: string = this.navParams.get('eventBandTown');
    redeemedBandZip: string = this.navParams.get('eventBandZip');
    redeemedBandStartDate: string = this.navParams.get('eventBandStartDate');
    redeemedBandStartTime: string = this.navParams.get('eventBandStartTime');
    redeemedTicketId: string = this.navParams.get('$key');

    redeemedtickets: RedeemTicket = new RedeemTicket()

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire,
  public googleMaps: GoogleMaps, public alertCtrl: AlertController) {
  }

  //Present alert advising of integrity of ticket sales
  redemptionOptions() {
  let alert = this.alertCtrl.create({
    title: 'Redemption',
    subTitle: 'Use the Redeem button below or scan the QR Code to redeem this ticket.',
    buttons: ['OK']
  });
  alert.present();
  }

  confirmRedemption() {
    let confirm = this.alertCtrl.create({
      title: 'Redeem Ticket?',
      message: 'Do you wish to redeem this ticket now?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            //alert("You just redeemed this ticket!");
            this.redeemedtickets.redeemedEventTitle = this.redeemedEventTitle;
            this.redeemedtickets.redeemedBandVenue = this.redeemedBandVenue;
            this.redeemedtickets.redeemedTickets = this.redeemedTickets;
            this.redeemedtickets.redeemedBandTown = this.redeemedBandTown;
            this.redeemedtickets.redeemedBandZip = this.redeemedBandZip;
            this.redeemedtickets.redeemedBandStartDate = this.redeemedBandStartDate;
            this.redeemedtickets.redeemedBandStartTime = this.redeemedBandStartTime;
            this.redeemedtickets.redeemedTicketId = this.redeemedTicketId;
            this.redeemedtickets.userId = firebase.auth().currentUser.uid;
            this.af.database.list('/redeemedtickets').push(this.redeemedtickets);
            this.redeemedtickets = new RedeemTicket();
            this.navCtrl.pop(MyTicketsPage);
            let alert = this .alertCtrl.create({
              title: 'Redemption Successful!',
              subTitle: 'This ticket was successfully redeemed',
              buttons: ['Ok']
            });
            alert.present();
          }
        }
      ]
    });
    confirm.present();
  }

}

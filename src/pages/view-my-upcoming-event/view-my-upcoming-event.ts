import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { QRRCodeComponent } from 'angualr2-qrcode';
import { MyTicketsPage } from '../my-tickets/my-tickets';

import * as firebase from 'firebase';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

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
    eventBandVenue: string = this.navParams.get('eventBandVenue');
    totalTicketsRequired: string = this.navParams.get('totalTicketsRequired');
    eventBandTown: string = this.navParams.get('eventBandTown');
    eventBandZip: string = this.navParams.get('eventBandZip');
    eventBandStartDate: string = this.navParams.get('eventBandStartDate');
    eventBandStartTime: string = this.navParams.get('eventBandStartTime');
    ticketId: string = this.navParams.get('$key');

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

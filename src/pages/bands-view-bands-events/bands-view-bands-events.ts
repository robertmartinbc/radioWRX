import * as firebase from 'firebase';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the BandsViewBandsEvents page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bands-view-bands-events',
  templateUrl: 'bands-view-bands-events.html'
})
export class BandsViewBandsEventsPage {
  events: FirebaseListObservable<any>

  eventTitle: string = this.navParams.get('eventTitle');
  eventVenue: string = this.navParams.get('eventVenue');
  eventTown: string = this.navParams.get('eventTown');
  eventZip: string = this.navParams.get('eventZip');
  eventAvailableTickets: string = this.navParams.get('eventAvailableTickets');
  eventTicketPrice: string = this.navParams.get('eventTicketPrice');
  eventStartDate: string = this.navParams.get('eventStartDate');
  eventStartTime: string = this.navParams.get('eventStartTime');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandsViewBandsEventsPage');
  }

}

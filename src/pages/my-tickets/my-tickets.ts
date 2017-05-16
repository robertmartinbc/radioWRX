import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ViewMyUpcomingEvent} from '../view-my-upcoming-event/view-my-upcoming-event';
import { ViewMyAttendedEvent} from '../view-my-attended-event/view-my-attended-event';
import { ViewMyCanceledEvent} from '../view-my-canceled-event/view-my-canceled-event';

@Component({
  selector: 'page-my-tickets',
  templateUrl: 'my-tickets.html'
})
export class MyTicketsPage {

  purchasedtickets: FirebaseListObservable<any>
  redeemedtickets: FirebaseListObservable<any>

  eventTitle: string = this.navParams.get('eventTitle');
  eventBandVenue: string = this.navParams.get('eventBandVenue');
  totalTicketsRequired: string = this.navParams.get('totalTicketsRequired');
  eventTown: string = this.navParams.get('eventTown');
  eventBandZip: string = this.navParams.get('eventBandZip');
  eventBandStartDate: string = this.navParams.get('eventBandStartDate');
  eventBandStartTime: string = this.navParams.get('eventBandStartTime');
  ticketId: string = this.navParams.get('$key');

  redeemedEventTitle: string = this.navParams.get('redeemedEventTitle');
  redeemedBandVenue: string = this.navParams.get('redeemedBandVenue');
  redeemedBandTown: string = this.navParams.get('redeemedBandTown');
  redeemedBandZip: string = this.navParams.get('redeemedBandZip');
  redeemedBandStartDate: string = this.navParams.get('redeemedBandStartDate');


  tickets: string = "upcoming";

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {

    this.purchasedtickets = af.database.list('/purchasedtickets')
    this.redeemedtickets = af.database.list('/redeemedtickets')

  }

  goToViewUpcomingEvent(item) {
    this.navCtrl.push(ViewMyUpcomingEvent, item);
  }

  goToViewAttendedEvent(item) {
    this.navCtrl.push(ViewMyAttendedEvent, item);
  }

  goToViewCanceledEvent(item) {
    this.navCtrl.push(ViewMyCanceledEvent, item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTicketsPage');
  }

}

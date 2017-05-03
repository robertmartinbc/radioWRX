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

  events: FirebaseListObservable<any>

  eventTitle = this.navParams.get('eventTitle');
  eventVenue = this.navParams.get('eventVenue');
  eventAvailableTickets = this.navParams.get('eventAvailableTickets');
  eventTown = this.navParams.get('eventTown');
  eventZip = this.navParams.get('eventZip');
  eventStartDate = this.navParams.get('eventStartDate');
  eventStartTime = this.navParams.get('eventStartTime');

  tickets: string = "upcoming";

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {

    this.events = af.database.list('/events')

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

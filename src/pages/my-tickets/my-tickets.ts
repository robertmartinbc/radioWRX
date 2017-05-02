import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ViewMyEvent} from '../view-my-event/view-my-event';

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

  tickets: string = "present";

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {

    this.events = af.database.list('/events')

  }

  goToViewEvent(item) {
    this.navCtrl.push(ViewMyEvent, item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTicketsPage');
  }

}

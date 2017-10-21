import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

@Component({
  selector: 'page-view-my-present-cd-funds',
  templateUrl: 'view-my-present-cd-funds.html'
})
export class ViewMyPresentCDFundsPage {

  events: FirebaseListObservable<any>

  eventTitle = this.navParams.get('eventTitle');
  eventVenue = this.navParams.get('eventVenue');
  eventAvailableTickets = this.navParams.get('eventAvailableTickets');
  eventTown = this.navParams.get('eventTown');
  eventZip = this.navParams.get('eventZip');
  eventStartDate = this.navParams.get('eventStartDate');
  eventStartTime = this.navParams.get('eventStartTime');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {

    this.events = af.list('/events')

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewMyPresentCDFundsPage');
  }

}

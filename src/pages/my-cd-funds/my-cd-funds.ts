import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ViewMyPastCDFundsPage } from '../view-my-past-cd-funds/view-my-past-cd-funds';
import { ViewMyPresentCDFundsPage } from '../view-my-present-cd-funds/view-my-present-cd-funds';

/*
  Generated class for the MyCDFunds page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-cd-funds',
  templateUrl: 'my-cd-funds.html'
})
export class MyCDFundsPage {

  events: FirebaseListObservable<any>

  eventTitle = this.navParams.get('eventTitle');
  eventVenue = this.navParams.get('eventVenue');
  eventAvailableTickets = this.navParams.get('eventAvailableTickets');
  eventTown = this.navParams.get('eventTown');
  eventZip = this.navParams.get('eventZip');
  eventStartDate = this.navParams.get('eventStartDate');
  eventStartTime = this.navParams.get('eventStartTime');

  cdfunds: string = "present";

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {

  this.events = af.database.list('/events')

  }

  goToViewPresentCDFunds(item) {
    this.navCtrl.push(ViewMyPresentCDFundsPage, item);
  }

  goToViewPastCDFunds(item) {
    this.navCtrl.push(ViewMyPastCDFundsPage, item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCDFundsPage');
  }

}

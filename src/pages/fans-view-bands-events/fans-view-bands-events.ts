import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the FansViewBandsEvents page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fans-view-bands-events',
  templateUrl: 'fans-view-bands-events.html'
})
export class FansViewBandsEventsPage {

  eventTitle: string = this.navParams.get('eventTitle');
  eventVenue: string = this.navParams.get('eventVenue');
  eventTown: string = this.navParams.get('eventTown');
  eventAvailableTickets: string = this.navParams.get('eventAvailableTickets');
  eventTicketPrice: string = this.navParams.get('eventTicketPrice');
  eventZip: string = this.navParams.get('eventZip');
  eventStartTime: string = this.navParams.get('eventStartTime');
  eventStartDate: string = this.navParams.get('eventStartDate');


  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FansViewBandsEventsPage');
  }

}

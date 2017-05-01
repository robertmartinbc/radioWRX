import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { EditBandsEventsDetailsPage } from '../edit-bands-events-details/edit-bands-events-details';

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

  eventTitle: string = this.navParams.get('eventTitle');
  eventVenue: string = this.navParams.get('eventVenue');
  eventTown: string = this.navParams.get('eventTown');
  eventZip: string = this.navParams.get('eventZip');
  eventAvailableTickets: string = this.navParams.get('eventAvailableTickets');
  eventTicketPrice: string = this.navParams.get('eventTicketPrice');
  eventStartDate: string = this.navParams.get('eventStartDate');
  eventStartTime: string = this.navParams.get('eventStartTime');

  public editEventTitle: any;
  public editEventVenue: any;
  public editEventTown: any;
  public editEventZip: any;
  public editEventAvailableTickets: any;
  public editEventTicketPrice: any;
  public editEventStartDate: any;
  public editEventStartTime: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {}

  goToEditBandsEvent() {
    this.navCtrl.push(EditBandsEventsDetailsPage, {
      editEventTitle: this.eventTitle,
      editEventVenue: this.eventVenue,
      editEventTown: this.eventTown,
      editEventZip: this.eventZip,
      editEventAvailableTickets: this.eventAvailableTickets,
      editEventTicketPrice: this.eventTicketPrice,
      editEventStartDate: this.eventStartDate,
      editEventStartTime: this.eventStartTime
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandsViewBandsEventsPage');
  }

}

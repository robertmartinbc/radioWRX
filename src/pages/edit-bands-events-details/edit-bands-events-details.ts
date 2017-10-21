import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

/*
  Generated class for the EditBandsEventsDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit-bands-events-details',
  templateUrl: 'edit-bands-events-details.html'
})
export class EditBandsEventsDetailsPage {
  events: FirebaseListObservable<any>

  editEventTitle: string = this.navParams.get('editEventTitle');
  editEventZip: string = this.navParams.get('editEventZip');
  editEventTown: string = this.navParams.get('editEventTown');
  editEventVenue: string = this.navParams.get('editEventVenue');
  editEventAvailableTickets: string = this.navParams.get('editEventAvailableTickets');
  editEventTicketPrice: string = this.navParams.get('editEventTicketPrice');
  editEventStartDate: string = this.navParams.get('editEventStartDate');
  editEventStartTime: string = this.navParams.get('editEventStartTime');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditBandsEventsDetailsPage');
  }

}

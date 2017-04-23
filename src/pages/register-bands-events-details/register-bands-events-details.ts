import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the RegisterBandsEventsDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

class Event {
  eventTitle: string
  eventVenue: string
  eventTown: string
  eventZip: string
  eventAvailableTickets: string
  eventTicketPrice: string
  eventStartDate: string
  eventStartTime: string
  id: string
  userId: string

}
@Component({
  selector: 'page-register-bands-events-details',
  templateUrl: 'register-bands-events-details.html'
})
export class RegisterBandsEventsDetailsPage {
  event: Event = new Event()
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {}

  submit() {
    //this.event.userId = firebase.auth().currentUser.uid;
    this.af.database.list('/events').push(this.event)
    this.event = new Event()
    this.navCtrl.pop(RegisterBandsEventsDetailsPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterBandsEventsDetailsPage');
  }

}

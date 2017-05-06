import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { SignInModalPage } from '../sign-in-modal/sign-in-modal';

import * as firebase from 'firebase';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-fans-view-bands-events',
  templateUrl: 'fans-view-bands-events.html'
})

export class FansViewBandsEventsPage {

  //Check state of user
  isLoggedIn: boolean = false;

  eventTitle: string = this.navParams.get('eventTitle');
  eventVenue: string = this.navParams.get('eventVenue');
  eventTown: string = this.navParams.get('eventTown');
  eventAvailableTickets: string = this.navParams.get('eventAvailableTickets');
  eventTicketPrice: string = this.navParams.get('eventTicketPrice');
  eventZip: string = this.navParams.get('eventZip');
  eventStartTime: string = this.navParams.get('eventStartTime');
  eventStartDate: string = this.navParams.get('eventStartDate');


  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire,
  public modalCtrl: ModalController) {

    //Check to see if user is logged in
    var _self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user)
        _self.isLoggedIn=true;
      else
        _self.isLoggedIn=false;
    });
  }

    //Present Sign Modal for RadioWRX User
    presentSignInModal() {
      var _self = this;
      let modal = this.modalCtrl.create(SignInModalPage);
      modal.present();
      firebase.auth().onAuthStateChanged(function(user) {
        if (user)
          _self.isLoggedIn=true;
        else
          _self.isLoggedIn=false;
      });
    }



  ionViewDidLoad() {
    console.log('ionViewDidLoad FansViewBandsEventsPage');
  }

}

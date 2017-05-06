import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { FansViewBandsEventsPage } from '../fans-view-bands-events/fans-view-bands-events';
import { SignInModalPage } from '../sign-in-modal/sign-in-modal';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html'
})
export class TicketsPage {

  //Make sure events list is visible in database
  events: FirebaseListObservable<any>


  //Set state of Logged in status
  isLoggedIn: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public modalCtrl: ModalController, public viewCtrl: ViewController,
  public af: AngularFire) {

    //Initiate the events database
    this.events = af.database.list('/events')

    //Set variable for state of User to check if logged in or out.
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

  //Provide Sign Out capability
  signOut(){
    // FIXME: Consider when some wrong occur with signOut by firebase
    this.isLoggedIn=false;
    firebase.auth().signOut().then(function() {
      alert('Sign out success.');
    }, function(error) {
      alert('Error to sign out.');
    });
  }

  goToEventView(item) {
    this.navCtrl.push(FansViewBandsEventsPage, item)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketsPage');
  }

}

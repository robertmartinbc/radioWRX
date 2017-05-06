import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { FansViewTicketsPage } from '../fans-view-tickets/fans-view-tickets';
import { SignInModalPage } from '../sign-in-modal/sign-in-modal';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html'
})
export class TicketsPage {

  isLoggedIn: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public modalCtrl: ModalController, public viewCtrl: ViewController,
  public af: AngularFire) {

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

  fansViewTickets = FansViewTicketsPage;

  signOut(){
    // FIXME: Consider when somewrong occur with signOut by firebase
    this.isLoggedIn=false;
    firebase.auth().signOut().then(function() {
      alert('Sign out success.');
    }, function(error) {
      alert('Error to sign out.');
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketsPage');
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { SignInModalPage } from '../sign-in-modal/sign-in-modal';

import * as firebase from 'firebase';

@Component({
  selector: 'page-fans-view-bands-members',
  templateUrl: 'fans-view-bands-members.html'
})
export class FansViewBandsMembersPage {

  isLoggedIn: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

    //Check to see if user is logged in
    var _self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user)
        _self.isLoggedIn=true;
      else
        _self.isLoggedIn=false;
    });

  }

  memberName = this.navParams.get('memberName');
  memberBiography = this.navParams.get('memberBiography');

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
    console.log('ionViewDidLoad FansViewBandsMembersPage');
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BandsViewBandsProfilePage } from '../bands-view-bands-profile/bands-view-bands-profile';
import { AngularFire } from 'angularfire2';

class PrivateParty {
  zipcode: string
  fee: string
}

/*
  Generated class for the RegisterBandsPrivatePartyDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register-bands-private-party-details',
  templateUrl: 'register-bands-private-party-details.html'
})
export class RegisterBandsPrivatePartyDetailsPage {
  privateparty: PrivateParty = new PrivateParty()
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {}

  submit() {
    //this.privateparty.userId = firebase.auth().currentUser.uid;
    this.af.database.list('/privateparty').push(this.privateparty);
    this.privateparty = new PrivateParty();
    this.navCtrl.pop(BandsViewBandsProfilePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterBandsPrivatePartyDetailsPage');
  }

}

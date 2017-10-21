import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BandsViewBandsProfilePage } from '../bands-view-bands-profile/bands-view-bands-profile';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

//Create class for a new CD Funds Request
class CDFunds {
  targetDate: string
  targetAmount: string
}

/*
  Generated class for the RegisterBandsCDFundsDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register-bands-cd-funds-details',
  templateUrl: 'register-bands-cd-funds-details.html'
})
export class RegisterBandsCDFundsDetailsPage {
  cdfunds: CDFunds = new CDFunds()

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {}

  submit() {
    //this.cdfunds.userId = firebase.auth().currentUser.uid;
    this.af.list('/cdfunds').push(this.cdfunds);
    this.cdfunds = new CDFunds();
    this.navCtrl.pop(BandsViewBandsProfilePage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterBandsCDFundsDetailsPage');
  }

}

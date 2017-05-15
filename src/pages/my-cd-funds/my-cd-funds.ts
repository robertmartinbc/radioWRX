import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ViewMyPastCDFundsPage } from '../view-my-past-cd-funds/view-my-past-cd-funds';
import { ViewMyPresentCDFundsPage } from '../view-my-present-cd-funds/view-my-present-cd-funds';

@Component({
  selector: 'page-my-cd-funds',
  templateUrl: 'my-cd-funds.html'
})
export class MyCDFundsPage {

  cdfunds: FirebaseListObservable<any>

  targetAmount = this.navParams.get('targetAmount');
  targetDate = this.navParams.get('targetDate');


  cdFunds: string = "present";

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {

  this.cdfunds = af.database.list('/cdfunds')

  }

  goToViewPresentCDFunds(item) {
    this.navCtrl.push(ViewMyPresentCDFundsPage, item);
  }

  goToViewPastCDFunds(item) {
    this.navCtrl.push(ViewMyPastCDFundsPage, item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCDFundsPage');
  }

}

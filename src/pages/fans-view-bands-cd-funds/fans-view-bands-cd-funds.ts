import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FansViewBandsPortfolioPage } from '../fans-view-bands-portfolio/fans-view-bands-portfolio';

import * as firebase from 'firebase';
import { AngularFire } from 'angularfire2';

class PurchasedCDFunds {
  selectedPackage: string
  selectedPackageMessage: string
  streetAddress: string
  cdFundsCity: string
  cdFundsCountry: string
  cdFundsZip: string
  cdFundImage: string
  userId: string
  bandId: string

}

@Component({
  selector: 'page-fans-view-bands-cd-funds',
  templateUrl: 'fans-view-bands-cd-funds.html'
})

export class FansViewBandsCDFundsPage {

  purchasedcdfunds: PurchasedCDFunds = new PurchasedCDFunds()

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {}

  submit() {
    this.purchasedcdfunds.userId = firebase.auth().currentUser.uid;
    this.af.database.list('/purchasedcdfunds').push(this.purchasedcdfunds)
    this.purchasedcdfunds = new PurchasedCDFunds()
    this.navCtrl.pop(FansViewBandsPortfolioPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FansViewBandsCDFundsPage');
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FansViewBandsPortfolioPage } from '../fans-view-bands-portfolio/fans-view-bands-portfolio';

import * as firebase from 'firebase';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

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

  cdfundspackage: FirebaseListObservable<any>

  purchasedcdfunds: PurchasedCDFunds = new PurchasedCDFunds()

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {

    this.cdfundspackage = af.database.list('/cdfundspackage')

  }

  choosePackage(item) {
    alert(this.package.selectedPackage);
    //FIX ME - Get value of package option and insert into input field
    //to write back to database for purchase of CD Funds.
  }

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

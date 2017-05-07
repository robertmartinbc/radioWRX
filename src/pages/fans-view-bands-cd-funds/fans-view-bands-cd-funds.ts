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
  cdFundsImage: string
  userId: string
  bandId: string
}

@Component({
  selector: 'page-fans-view-bands-cd-funds',
  templateUrl: 'fans-view-bands-cd-funds.html'
})

export class FansViewBandsCDFundsPage {

  //test: any;
  selectedPackage: any;
  selectedPackageText: any;

  cdfundspackage: FirebaseListObservable<any>

  purchasedcdfunds: PurchasedCDFunds = new PurchasedCDFunds()

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {

    this.cdfundspackage = af.database.list('/cdfundspackage')

  }

  //FIX ME - Value is only being read from one element.
  //Needs to be different for each item. Add validation
  //to shipping form as well
  choosePackage() {
    this.selectedPackage = document.getElementById('selectedPackageAmount').innerHTML;
    this.selectedPackageText = document.getElementById('selectedPackageText').innerHTML;
    this.purchasedcdfunds.selectedPackage = this.selectedPackage;
    this.purchasedcdfunds.selectedPackageMessage = this.selectedPackageText;
    console.log("-------");
    console.log(this.selectedPackage);
    console.log(this.selectedPackageText);
    console.log("AAAAAAAAAAHHHHH")
    console.log(this.purchasedcdfunds.selectedPackage);
    console.log(this.purchasedcdfunds.selectedPackageMessage);
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

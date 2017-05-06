import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterBandsCDFundsDetailsPage } from '../register-bands-cd-funds-details/register-bands-cd-funds-details';
import { AngularFire } from 'angularfire2';

//Create class for a new CD Funds Package creation
class CDFundsPackage {
  selectedPackage: string
  selectedPackageDescription: String
}

@IonicPage()
@Component({
  selector: 'page-register-cd-funds-packages',
  templateUrl: 'register-cd-funds-packages.html',
})
export class RegisterCDFundsPackages {

  cdfundspackage: CDFundsPackage = new CDFundsPackage()

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {
  }

  submit() {
    //this.cdfundspackage.userId = firebase.auth().currentUser.uid;
    this.af.database.list('/cdfundspackage').push(this.cdfundspackage);
    this.cdfundspackage = new CDFundsPackage();
    this.navCtrl.pop(RegisterBandsCDFundsDetailsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterCDFundsPackages');
  }

}

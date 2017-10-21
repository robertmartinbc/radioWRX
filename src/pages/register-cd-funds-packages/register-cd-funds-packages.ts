import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterBandsCDFundsDetailsPage } from '../register-bands-cd-funds-details/register-bands-cd-funds-details';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {
  }

  submit() {
    //this.cdfundspackage.userId = firebase.auth().currentUser.uid;
    this.af.list('/cdfundspackage').push(this.cdfundspackage);
    this.cdfundspackage = new CDFundsPackage();
    this.navCtrl.pop(RegisterBandsCDFundsDetailsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterCDFundsPackages');
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the EditBandsPrivatePartyDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit-bands-private-party-details',
  templateUrl: 'edit-bands-private-party-details.html'
})
export class EditBandsPrivatePartyDetailsPage {
  privateparty: FirebaseListObservable<any>

  editLocation: string = this.navParams.get('editLocation');
  editFee: string = this.navParams.get('editFee');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditBandsPrivatePartyDetailsPage');
  }

}

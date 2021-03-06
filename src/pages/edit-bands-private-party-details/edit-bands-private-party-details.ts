import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditBandsPrivatePartyDetailsPage');
  }

}

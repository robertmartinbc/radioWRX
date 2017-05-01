import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { EditBandsPrivatePartyDetailsPage } from '../edit-bands-private-party-details/edit-bands-private-party-details';

@Component({
  selector: 'page-bands-view-bands-private-party',
  templateUrl: 'bands-view-bands-private-party.html'
})
export class BandsViewBandsPrivatePartyPage {

  location: string = this.navParams.get('location');
  fee: string = this.navParams.get('fee');

  public editLocation: any;
  public editFee: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {}

  goToEditPrivateParty() {
    this.navCtrl.push(EditBandsPrivatePartyDetailsPage, {
      editLocation: this.location,
      editFee: this.fee
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandsViewBandsPrivatePartyPage');
  }

}

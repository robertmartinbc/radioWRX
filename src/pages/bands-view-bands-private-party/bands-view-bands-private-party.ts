import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the BandsViewBandsPrivateParty page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bands-view-bands-private-party',
  templateUrl: 'bands-view-bands-private-party.html'
})
export class BandsViewBandsPrivatePartyPage {

  location: string = this.navParams.get('location');
  fee: string = this.navParams.get('fee');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandsViewBandsPrivatePartyPage');
  }

}

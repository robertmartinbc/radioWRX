import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandsViewBandsPrivatePartyPage');
  }

}

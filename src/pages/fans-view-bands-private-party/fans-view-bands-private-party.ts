import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-fans-view-bands-private-party',
  templateUrl: 'fans-view-bands-private-party.html'
})

export class FansViewBandsPrivatePartyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FansViewBandsPrivatePartyPage');
  }

}

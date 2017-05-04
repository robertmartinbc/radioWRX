import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-my-bands-by-fans',
  templateUrl: 'my-bands-by-fans.html'
})
export class MyBandsByFansPage {

  bandsByFans: string = "present";

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyBandsByFansPage');
  }

}

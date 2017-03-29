import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ViewMyPresentBandsByFans page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-view-my-present-bands-by-fans',
  templateUrl: 'view-my-present-bands-by-fans.html'
})
export class ViewMyPresentBandsByFansPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewMyPresentBandsByFansPage');
  }

}

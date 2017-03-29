import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ViewMyPastBandsByFans page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-view-my-past-bands-by-fans',
  templateUrl: 'view-my-past-bands-by-fans.html'
})
export class ViewMyPastBandsByFansPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewMyPastBandsByFansPage');
  }

}

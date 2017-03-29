import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ViewMyPresentCDFunds page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-view-my-present-cd-funds',
  templateUrl: 'view-my-present-cd-funds.html'
})
export class ViewMyPresentCDFundsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewMyPresentCDFundsPage');
  }

}

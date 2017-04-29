import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire } from 'angularfire2';

/*
  Generated class for the BandsViewBandsByFans page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bands-view-bands-by-fans',
  templateUrl: 'bands-view-bands-by-fans.html'
})
export class BandsViewBandsByFansPage {

  chosenCountry: string = this.navParams.get('chosenCountry');
  ticketPrice: string = this.navParams.get('ticketPrice');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandsViewBandsByFansPage');
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the RegisterBandsVideosDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register-bands-videos-details',
  templateUrl: 'register-bands-videos-details.html'
})
export class RegisterBandsVideosDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterBandsVideosDetailsPage');
  }

}

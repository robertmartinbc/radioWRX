import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterBandsAlbumDetailsPage } from '../register-bands-album-details/register-bands-album-details';

/*
  Generated class for the BandsViewBandsProfile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bands-view-bands-profile',
  templateUrl: 'bands-view-bands-profile.html'
})
export class BandsViewBandsProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  registerBandsAlbumDetails = RegisterBandsAlbumDetailsPage;
  ionViewDidLoad() {
    console.log('ionViewDidLoad BandsViewBandsProfilePage');
  }

}

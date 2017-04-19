import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BandsViewAlbumPage } from '../bands-view-album/bands-view-album';


@Component({
  selector: 'page-edit-bands-songs-details',
  templateUrl: 'edit-bands-songs-details.html'
})
export class EditBandsSongsDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditBandsSongsDetailsPage');
  }

}

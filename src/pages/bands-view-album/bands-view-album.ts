import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the BandsViewAlbum page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bands-view-album',
  templateUrl: 'bands-view-album.html'
})

export class BandsViewAlbumPage {

  albumTitle: string = this.navParams.get('albumTitle');
  albumId: string = this.navParams.get('$key');

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandsViewAlbumPage');
  }

}

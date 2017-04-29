import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the FansViewBandsAlbum page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fans-view-bands-album',
  templateUrl: 'fans-view-bands-album.html'
})
export class FansViewBandsAlbumPage {

  songs: FirebaseListObservable<any>

  albumTitle: string = this.navParams.get('albumTitle');
  albumDuration: string = this.navParams.get('albumDuration');
  albumGenre: string = this.navParams.get('albumGenre');
  albumYearReleased: string = this.navParams.get('albumYearReleased');
  albumTotalSongs: string = this.navParams.get('albumTotalSongs');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {
    this.songs = af.database.list('/songs')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FansViewBandsAlbumPage');
  }

}

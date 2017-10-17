import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MySongsPage } from '../my-songs/my-songs';
import { MyArtistsPage } from '../my-artists/my-artists';
import { MyPlaylistsPage } from '../my-playlists/my-playlists';
//import { FansViewBandsAlbumPage } from '../fans-view-bands-album/fans-view-bands-album';
import { ViewMyAlbum } from '../view-my-album/view-my-album';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-my-albums',
  templateUrl: 'my-albums.html'
})
export class MyAlbumsPage {

  albums: FirebaseListObservable<any>

  albumTitle: string = this.navParams.get('albumTitle');
  albumDuration: string = this.navParams.get('albumDuration');
  albumGenre: string = this.navParams.get('albumGenre');
  albumYearReleased: string = this.navParams.get('albumYearReleased');
  albumTotalSongs: string = this.navParams.get('albumTotalSongs');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {

    this.albums = af.database.list('/albums')
  }
  artistsPage = MyArtistsPage;
  songsPage = MySongsPage;
  playlistsPage = MyPlaylistsPage;

  goToAlbumView(item) {
    this.navCtrl.push(ViewMyAlbum, item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAlbumsPage');
  }

}

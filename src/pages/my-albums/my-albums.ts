import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MySongsPage } from '../my-songs/my-songs';
import { MyArtistsPage } from '../my-artists/my-artists';
import { MyPlaylistsPage } from '../my-playlists/my-playlists';

/*
  Generated class for the MyAlbums page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-albums',
  templateUrl: 'my-albums.html'
})
export class MyAlbumsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  artistsPage = MyArtistsPage;
  songsPage = MySongsPage;
  playlistsPage = MyPlaylistsPage;
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAlbumsPage');
  }

}

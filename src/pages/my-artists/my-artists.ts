import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyAlbumsPage } from '../my-albums/my-albums';
import { MySongsPage } from '../my-songs/my-songs';
import { MyPlaylistsPage } from '../my-playlists/my-playlists';

/*
  Generated class for the MyArtists page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-artists',
  templateUrl: 'my-artists.html'
})
export class MyArtistsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  albumsPage = MyAlbumsPage;
  songsPage = MySongsPage;
  playlistsPage = MyPlaylistsPage;

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyArtistsPage');
  }

}

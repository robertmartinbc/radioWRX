import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyAlbumsPage } from '../my-albums/my-albums';
import { MyArtistsPage } from '../my-artists/my-artists';
import { MyPlaylistsPage } from '../my-playlists/my-playlists';


/*
  Generated class for the MySongs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-songs',
  templateUrl: 'my-songs.html'
})
export class MySongsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  albumsPage = MyAlbumsPage;
  artistsPage = MyArtistsPage;
  playlistsPage = MyPlaylistsPage;

  ionViewDidLoad() {
    console.log('ionViewDidLoad MySongsPage');
  }

}

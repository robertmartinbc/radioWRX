import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyAlbumsPage } from '../my-albums/my-albums';
import { MyArtistsPage } from '../my-artists/my-artists';
import { MySongsPage } from '../my-songs/my-songs';
import { MyPlaylistsPage } from '../my-playlists/my-playlists';

/*
  Generated class for the Music page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-music',
  templateUrl: 'music.html'
})
export class MusicPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  albumsPage = MyAlbumsPage;
  artistsPage = MyArtistsPage;
  songsPage = MySongsPage;
  playlistsPage = MyPlaylistsPage;

  goToMyAlbums() {
    this.navCtrl.push(MyAlbumsPage);
  }

  goToMySongs() {
    this.navCtrl.push(MySongsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicPage');
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyAlbumsPage } from '../my-albums/my-albums';
import { MyArtistsPage } from '../my-artists/my-artists';
import { MyPlaylistsPage } from '../my-playlists/my-playlists';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-my-songs',
  templateUrl: 'my-songs.html'
})
export class MySongsPage {

  songs: FirebaseListObservable<any>

  songTitle: string = this.navParams.get('songTitle');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {

    this.songs = af.database.list('/songs')

  }
  albumsPage = MyAlbumsPage;
  artistsPage = MyArtistsPage;
  playlistsPage = MyPlaylistsPage;

  ionViewDidLoad() {
    console.log('ionViewDidLoad MySongsPage');
  }

}

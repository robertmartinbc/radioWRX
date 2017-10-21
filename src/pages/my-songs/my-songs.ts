import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyAlbumsPage } from '../my-albums/my-albums';
import { MyArtistsPage } from '../my-artists/my-artists';
import { MyPlaylistsPage } from '../my-playlists/my-playlists';

import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

@Component({
  selector: 'page-my-songs',
  templateUrl: 'my-songs.html'
})
export class MySongsPage {

  songs: FirebaseListObservable<any>

  songTitle: string = this.navParams.get('songTitle');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {

    this.songs = af.list('/songs')

  }
  albumsPage = MyAlbumsPage;
  artistsPage = MyArtistsPage;
  playlistsPage = MyPlaylistsPage;

  ionViewDidLoad() {
    console.log('ionViewDidLoad MySongsPage');
  }

}

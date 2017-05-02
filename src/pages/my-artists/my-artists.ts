import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyAlbumsPage } from '../my-albums/my-albums';
import { MySongsPage } from '../my-songs/my-songs';
import { MyPlaylistsPage } from '../my-playlists/my-playlists';
import { ViewMyArtist } from '../view-my-artist/view-my-artist';
import { AngularFire, FirebaseListObservable } from 'angularfire2'

@Component({
  selector: 'page-my-artists',
  templateUrl: 'my-artists.html'
})
export class MyArtistsPage {

  albums: FirebaseListObservable<any>

  albumTitle: string = this.navParams.get('albumTitle');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {

    this.albums = af.database.list('/albums');

  }

  goToViewMyArtist(item) {
    this.navCtrl.push(ViewMyArtist);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyArtistsPage');
  }

}

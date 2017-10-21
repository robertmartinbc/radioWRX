import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

@IonicPage()
@Component({
  selector: 'page-view-my-album',
  templateUrl: 'view-my-album.html',
})
export class ViewMyAlbum {

  songs: FirebaseListObservable<any>

  albumTitle = this.navParams.get('albumTitle');
  albumDuration: string = this.navParams.get('albumDuration');
  albumGenre: string = this.navParams.get('albumGenre');
  albumYearReleased: string = this.navParams.get('albumYearReleased');
  albumTotalSongs: string = this.navParams.get('albumTotalSongs');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {

    this.songs = af.list('/songs')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewMyAlbum');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewMyAlbum } from '../view-my-album/view-my-album';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

@IonicPage()
@Component({
  selector: 'page-view-my-artist',
  templateUrl: 'view-my-artist.html',
})
export class ViewMyArtist {

  albums: FirebaseListObservable<any>

  albumTitle: string = this.navParams.get('albumTitle');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {

    this.albums = af.list('/albums');

  }

  goToViewMyAlbum(item) {
    this.navCtrl.push(ViewMyAlbum, item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewMyArtist');
  }

}

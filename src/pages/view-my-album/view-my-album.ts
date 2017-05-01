import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {

    this.songs = af.database.list('/songs')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewMyAlbum');
  }

}

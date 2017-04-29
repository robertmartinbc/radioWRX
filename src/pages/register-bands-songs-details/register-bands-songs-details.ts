import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BandsViewAlbumPage } from '../bands-view-album/bands-view-album';

import { AngularFire } from 'angularfire2';

//Create class for a song
class Song {
  songTitle: string
  songNumber: string
  songWriters: string
  songDurationSeconds: string
  songTotalDuration: string
  songPublisherName: string
  songBundleName: string
  songISRCCode: string
  songLabelName: string
  songProductCatalogueNumber: string
  songDiscNumber: string
  songGrid: string
  songISWC: string
  songBundleId: string
  songPhysicalProductName
  userId: string
  albumId: string
}

@Component({
  selector: 'page-register-bands-songs-details',
  templateUrl: 'register-bands-songs-details.html'
})
export class RegisterBandsSongsDetailsPage {

  song: Song = new Song()
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {}

  addSong() {
    this.song.userId = firebase.auth().currentUser.uid;
    //this.album.id = ;
    this.af.database.list('/songs').push(this.song)
    this.song = new Song()
    this.navCtrl.pop(BandsViewAlbumPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterBandsSongsDetailsPage');
  }

}

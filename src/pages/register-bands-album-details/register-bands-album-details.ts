import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { BandsViewBandsProfilePage } from '../bands-view-bands-profile/bands-view-bands-profile';
import { AngularFire } from 'angularfire2';

//Create class for a new album
class Album {
  albumTitle: string
  albumYearReleased: string
  albumTotalSongs: string
  albumDuration: string
  albumUPCCode: string
  albumGenre: string
  userId: string
  id: string

  constructor() {}
}
@Component({
  selector: 'page-register-bands-album-details',
  templateUrl: 'register-bands-album-details.html'
})
export class RegisterBandsAlbumDetailsPage {
  album: Album = new Album()
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {
  }

  submit() {
    //this.album.userId = firebase.auth().currentUser.uid;
    this.af.database.list('/albums').push(this.album)
    this.album = new Album()
    this.navCtrl.pop(RegisterBandsAlbumDetailsPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterBandsAlbumDetailsPage');
  }

}

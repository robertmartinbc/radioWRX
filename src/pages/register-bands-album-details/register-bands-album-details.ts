import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { BandsViewBandsProfilePage } from '../bands-view-bands-profile/bands-view-bands-profile';
import { AngularFire } from 'angularfire2';

/*
  Generated class for the RegisterBandsAlbumDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

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
    //console.log('aaaaaaaaa');
    //console.log(firebase.auth().currentUser);
    console.log('currentUser.id:');
    console.log(firebase.auth().currentUser.uid);
  }

  submit() {
    this.album.userId = firebase.auth().currentUser.uid;
    //this.album.id = ;
    this.af.database.list('/albums').push(this.album)
    this.album = new Album()
    this.navCtrl.pop(RegisterBandsAlbumDetailsPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterBandsAlbumDetailsPage');
  }

}

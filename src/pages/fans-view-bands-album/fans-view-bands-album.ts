import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { SignInModalPage } from '../sign-in-modal/sign-in-modal';

import * as firebase from 'firebase';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-fans-view-bands-album',
  templateUrl: 'fans-view-bands-album.html'
})

export class FansViewBandsAlbumPage {

  isLoggedIn: boolean = false;

  songs: FirebaseListObservable<any>

  albumTitle: string = this.navParams.get('albumTitle');
  albumDuration: string = this.navParams.get('albumDuration');
  albumGenre: string = this.navParams.get('albumGenre');
  albumYearReleased: string = this.navParams.get('albumYearReleased');
  albumTotalSongs: string = this.navParams.get('albumTotalSongs');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire,
  public modalCtrl: ModalController) {

    this.songs = af.database.list('/songs')

    //Check to see if user is logged in
    var _self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user)
        _self.isLoggedIn=true;
      else
        _self.isLoggedIn=false;
    });
  }

  //Present Sign Modal for RadioWRX User
  presentSignInModal() {
    var _self = this;
    let modal = this.modalCtrl.create(SignInModalPage);
    modal.present();
    firebase.auth().onAuthStateChanged(function(user) {
      if (user)
        _self.isLoggedIn=true;
      else
        _self.isLoggedIn=false;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FansViewBandsAlbumPage');
  }

}

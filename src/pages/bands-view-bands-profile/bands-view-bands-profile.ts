import * as firebase from 'firebase';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterBandsAlbumDetailsPage } from '../register-bands-album-details/register-bands-album-details';
import { RegisterBandsMembersDetailsPage } from '../register-bands-members-details/register-bands-members-details';
import { RegisterBandsVideosDetailsPage } from '../register-bands-videos-details/register-bands-videos-details';
import { RegisterBandsEventsDetailsPage } from '../register-bands-events-details/register-bands-events-details';
import { BandsViewAlbumPage } from '../bands-view-album/bands-view-album';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the BandsViewBandsProfile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bands-view-bands-profile',
  templateUrl: 'bands-view-bands-profile.html'
})
export class BandsViewBandsProfilePage {

//This code makes sure the database lists are visible in the Bands profile
  albums: FirebaseListObservable<any>
  members: FirebaseListObservable<any>
  videos: FirebaseListObservable<any>
  events: FirebaseListObservable<any>

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {
    //console.log('currentUser.id:');
    //console.log(firebase.auth().currentUser.uid);
    //if (firebase.auth().currentUser){
      //this.albums = af.database.list('/albums', {query: {orderByChild : "userId", equalTo: firebase.auth().currentUser.uid}})
      this.albums = af.database.list('/albums', {query: {orderByChild : "userId", equalTo: 'PzrVDzKNGqfSkznM6nCbfsLY0X12'}})
      this.members = af.database.list('/members')
      this.videos = af.database.list('/videos')
      this.events = af.database.list('/events')
    //}
  }

  registerBandsAlbumDetails = RegisterBandsAlbumDetailsPage;
  registerBandsMembersDetails = RegisterBandsMembersDetailsPage;
  registerBandsVideosDetails = RegisterBandsVideosDetailsPage;
  registerBandsEventsDetails = RegisterBandsEventsDetailsPage;
  ionViewDidLoad() {
    console.log('ionViewDidLoad BandsViewBandsProfilePage');
  }

  displayAlbum(item) {
    this.navCtrl.push(BandsViewAlbumPage, item);
  }

}

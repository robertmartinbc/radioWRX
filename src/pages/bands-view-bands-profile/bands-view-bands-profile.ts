import * as firebase from 'firebase';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterBandsAlbumDetailsPage } from '../register-bands-album-details/register-bands-album-details';
import { RegisterBandsMembersDetailsPage } from '../register-bands-members-details/register-bands-members-details';
import { RegisterBandsVideosDetailsPage } from '../register-bands-videos-details/register-bands-videos-details';
import { RegisterBandsEventsDetailsPage } from '../register-bands-events-details/register-bands-events-details';
import { RegisterBandsByFansDetailsPage } from '../register-bands-by-fans-details/register-bands-by-fans-details';
import { RegisterBandsCDFundsDetailsPage } from '../register-bands-cd-funds-details/register-bands-cd-funds-details';
import { RegisterBandsPrivatePartyDetailsPage } from '../register-bands-private-party-details/register-bands-private-party-details';
import { BandsViewAlbumPage } from '../bands-view-album/bands-view-album';
import { BandsViewBandsMembersPage } from '../bands-view-bands-members/bands-view-bands-members';
import { BandsViewBandsByFansPage } from '../bands-view-bands-by-fans/bands-view-bands-by-fans';
import { BandsViewBandsPrivatePartyPage } from '../bands-view-bands-private-party/bands-view-bands-private-party';
import { BandsViewBandsCDFundsPage } from '../bands-view-bands-cd-funds/bands-view-bands-cd-funds';
import { BandsViewBandsEventsPage } from '../bands-view-bands-events/bands-view-bands-events';
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
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.albums = af.database.list('/albums', {query: {orderByChild : "userId", equalTo: user.uid}})
        this.members = af.database.list('/members', {query: {orderByChild : "userId", equalTo: user.uid}})
        this.videos = af.database.list('/videos', {query: {orderByChild : "userId", equalTo: user.uid}})
        this.events = af.database.list('/events', {query: {orderByChild : "userId", equalTo: user.uid}})
      } else {
        // No user is signed in.
      }
    });
  }

  //Set up links to Bands pages
  registerBandsAlbumDetails = RegisterBandsAlbumDetailsPage;
  registerBandsMembersDetails = RegisterBandsMembersDetailsPage;
  registerBandsVideosDetails = RegisterBandsVideosDetailsPage;
  registerBandsEventsDetails = RegisterBandsEventsDetailsPage;
  registerBandsByFansDetails = RegisterBandsByFansDetailsPage;
  registerBandsCDFundsDetails = RegisterBandsCDFundsDetailsPage;
  registerBandsPrivatePartyDetails = RegisterBandsPrivatePartyDetailsPage;

  bandsViewBandsByFans = BandsViewBandsByFansPage;
  bandsViewBandsPrivateParty = BandsViewBandsPrivatePartyPage;
  bandsViewBandsCDFunds = BandsViewBandsCDFundsPage;
  bandsViewBandsEvents = BandsViewBandsEventsPage;

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandsViewBandsProfilePage');
  }

  //Go to view album page and pass Album data
  displayAlbum(item) {
    this.navCtrl.push(BandsViewAlbumPage, item);
  }

  //Go to view members page and pass Album data
  displayMember(item) {
    this.navCtrl.push(BandsViewBandsMembersPage, item);
  }

  //Go to view members page and pass Album data
  displayEvents(item) {
    this.navCtrl.push(BandsViewBandsEventsPage, item);
  }

}

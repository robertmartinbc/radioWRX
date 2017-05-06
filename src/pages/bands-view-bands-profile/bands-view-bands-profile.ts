import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, ToastController } from 'ionic-angular';
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

@Component({
  selector: 'page-bands-view-bands-profile',
  templateUrl: 'bands-view-bands-profile.html'
})

export class BandsViewBandsProfilePage {

  @ViewChild('bandMusicSlider') viewer: Slides;
  @ViewChild('bandMemberSlider') viewer1: Slides;
  @ViewChild('bandVideoSlider') viewer2: Slides;
  @ViewChild('bandEventSlider') viewer3: Slides;
  @ViewChild('bandsByFansSlider') viewer4: Slides;
  @ViewChild('cdFundsSlider') viewer5: Slides;
  @ViewChild('privatePartySlider') viewer6: Slides;

  //This code makes sure the database lists are visible in the Bands profile
  albums: FirebaseListObservable<any>
  members: FirebaseListObservable<any>
  videos: FirebaseListObservable<any>
  events: FirebaseListObservable<any>
  bandsbyfans: FirebaseListObservable<any>
  cdfunds: FirebaseListObservable<any>
  privateparty: FirebaseListObservable<any>
  songs: FirebaseListObservable<any>


  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire,
  public toastCtrl: ToastController) {


    this.albums = af.database.list('/albums')
    this.members = af.database.list('/members')
    this.videos = af.database.list('/videos')
    this.events = af.database.list('/events')
    this.bandsbyfans = af.database.list('/bandsbyfans')
    this.cdfunds = af.database.list('/cdfunds')
    this.privateparty = af.database.list('/privateparty')
    this.songs = af.database.list('/songs')

//FIX ME User queries to show data only for specific band ID
    /*firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('USER.UID:');
        console.log(user.uid);
        this.albums = af.database.list('/albums', {query: {orderByChild : "userId", equalTo: user.uid}})
        this.members = af.database.list('/members', {query: {orderByChild : "userId", equalTo: user.uid}})
        this.videos = af.database.list('/videos', {query: {orderByChild : "userId", equalTo: user.uid}})
        this.events = af.database.list('/events', {query: {orderByChild : "userId", equalTo: user.uid}})
      } else {
        // No user is signed in.
      }
    });*/
  }

  ngAfterViewInit() {
  //Parameters for Music Carosusel
    this.viewer.speed = 750;
    this.viewer.pager = true;
    this.viewer.slidesPerView = 2;


  //Parameters for Members Carousel
    this.viewer1.speed = 750;
    this.viewer1.pager = true;
    this.viewer1.slidesPerView = 2;

  //Parameters for Videos Carousel
    this.viewer2.speed = 750;
    this.viewer2.pager = true;
    //this.viewer2.slidesPerView = 2;

  //Parameters for Events Carousel
    this.viewer3.speed = 750;
    this.viewer3.pager = true;
    this.viewer3.slidesPerView = 2;

  //Parameters for Bands By Fans Carousel
    this.viewer4.speed = 750;
    this.viewer4.pager = true;
    this.viewer4.slidesPerView = 2;

  //Parameters for CD Funds Carousel
    this.viewer5.speed = 750;
    this.viewer5.pager = true;
    this.viewer5.slidesPerView = 2;

  //Parameters for Private Party Carousel
    this.viewer6.speed = 750;
    this.viewer6.pager = true;
    this.viewer6.slidesPerView = 2;
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
  goToBandsAlbumView(albumItem) {
    this.navCtrl.push(BandsViewAlbumPage, albumItem);
  }

  //Go to view members page and pass member data
  goToBandsMemberView(item) {
    this.navCtrl.push(BandsViewBandsMembersPage, item);
  }

  //Go to view bands by fans page and pass BBF data
  goToBandsByFansView(item) {
    this.navCtrl.push(BandsViewBandsByFansPage, item);
  }

  //Go to view bands by fans page and pass BBF data
  goToCDFundsView(item) {
    this.navCtrl.push(BandsViewBandsCDFundsPage, item);
  }

  //Go to view bands by fans page and pass BBF data
  goToPrivatePartyView(item) {
    this.navCtrl.push(BandsViewBandsPrivatePartyPage, item);
  }

  //Go to view events page and pass events data
  goToBandsEventView(item) {
    this.navCtrl.push(BandsViewBandsEventsPage, item);
  }

}

import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, Slides } from 'ionic-angular';
import { FansViewBandsPortfolioPage } from '../fans-view-bands-portfolio/fans-view-bands-portfolio';
import { FansViewBandsEventsPage } from '../fans-view-bands-events/fans-view-bands-events';
import { ViewAllTrendingArtistsPage } from '../view-all-trending-artists/view-all-trending-artists';
import { ViewAllTrendingVideosPage } from '../view-all-trending-videos/view-all-trending-videos';
import { ViewAllTrendingEventsPage } from '../view-all-trending-events/view-all-trending-events';
import { SignInModalPage } from '../sign-in-modal/sign-in-modal';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

import * as firebase from 'firebase';
import { AudioProvider } from 'ionic-audio';

@Component({
  selector: 'page-radio',
  templateUrl: 'radio.html'
})

export class RadioPage {
  @ViewChild('picSlider') viewer: Slides;
  @ViewChild('videoSlider') viewer1: Slides;
  @ViewChild('eventSlider') viewer2: Slides;

  fansViewBandsPortfolio = FansViewBandsPortfolioPage;
  viewAllTrendingArtists = ViewAllTrendingArtistsPage;
  viewAllTrendingVideos = ViewAllTrendingVideosPage;
  viewAllTrendingEvents = ViewAllTrendingEventsPage;

  //This code makes sure the database lists are visible in the Bands profile
  albums: FirebaseListObservable<any>
  members: FirebaseListObservable<any>
  videos: FirebaseListObservable<any>
  events: FirebaseListObservable<any>
  isLoggedIn: boolean = false;

  user: string = this.navParams.get('user');

  //Set up some audio.
  myTracks: any[];
  allTracks: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
  public viewCtrl: ViewController, public af: AngularFireDatabase, private _audioProvider: AudioProvider) {

    //Build an array of some tracks.
    this.myTracks = [{
      src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3',
      artist: 'John Mayer',
      title: 'Why Georgia',
      art: 'https://api.appery.io/rest/1/db/files/5518394be4b085114003daf6/7f241c97-d10f-4350-9e74-b5eb5e3709cb.thisdayburns.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
    {
      src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t30-MP3-V0.mp3',
      artist: 'John Mayer',
      title: 'Who Says',
      art: 'https://api.appery.io/rest/1/db/files/5518394be4b085114003daf6/7f241c97-d10f-4350-9e74-b5eb5e3709cb.thisdayburns.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    }];


    var _self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user)
        _self.isLoggedIn=true;
      else
        _self.isLoggedIn=false;
    });

    /*var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;

      firebase.auth().onAuthStateChanged(function(user) {
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                         // this value to authenticate with your backend server, if
                         // you have one. Use User.getToken() instead.
        console.log(uid);
        console.log(email);
      }
    });*/

    this.albums = af.list('/albums')
    this.members = af.list('/members')
    this.videos = af.list('/videos')
    this.events = af.list('/events')
  }

  ngAfterViewInit() {
    //Parameters for Artists Carosusel
    this.viewer.speed = 750;
    this.viewer.pager = true;
    this.viewer.slidesPerView = 2;

    //Parameters for Video Carousel
    this.viewer1.speed = 750;
    this.viewer1.pager = true;

    //Parameters for Events Carousel
    this.viewer2.speed = 750;
    this.viewer2.pager = true;
    this.viewer2.slidesPerView = 2;
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

  dismiss() {
    this.viewCtrl.dismiss();
  }

  goToArtistView(item) {
    console.log(item);
    this.navCtrl.push(FansViewBandsPortfolioPage, item);
  }

  goToEventView(item) {
    console.log(item);
    this.navCtrl.push(FansViewBandsEventsPage, item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RadioPage');
    //console.log(this.navParams.data);
  }

  signOut(){
    // FIXME: Consider when some wrong occur with signOut by firebase.
    //Also showing toast
    this.isLoggedIn=false;
    firebase.auth().signOut().then(function() {
      //alert('Sign out success.');
    }, function(error) {
      alert('Error to sign out.');
    });
  }

  ngAfterContentInit() {
    // get all tracks managed by AudioProvider so we can control playback via the API
    this.allTracks = this._audioProvider.tracks;
  }

/*
  playSelectedTrack() {
    // use AudioProvider to control selected track
    this._audioProvider.play(this.selectedTrack);
  }

  pauseSelectedTrack() {
     // use AudioProvider to control selected track
     this._audioProvider.pause(this.selectedTrack);
  }
*/

  onTrackFinished(track: any) {
    console.log('Track finished', track)
  }
}

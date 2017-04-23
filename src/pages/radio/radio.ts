import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, Slides } from 'ionic-angular';
import { FansViewBandsPortfolioPage } from '../fans-view-bands-portfolio/fans-view-bands-portfolio';
import { FansViewBandsEventsPage } from '../fans-view-bands-events/fans-view-bands-events';
import { ViewAllTrendingArtistsPage } from '../view-all-trending-artists/view-all-trending-artists';
import { ViewAllTrendingVideosPage } from '../view-all-trending-videos/view-all-trending-videos';
import { ViewAllTrendingEventsPage } from '../view-all-trending-events/view-all-trending-events';
import { SignInModalPage } from '../sign-in-modal/sign-in-modal';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';

/*
  Generated class for the Radio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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

    //video

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
  public viewCtrl: ViewController, public af: AngularFire) {

    firebase.auth().onAuthStateChanged(function(user) {
      if (user)
        var is_logged_in = true
      else
        var is_logged_in = false
    });

    this.albums = af.database.list('/albums')
    this.members = af.database.list('/members')
    this.videos = af.database.list('/videos')
    this.events = af.database.list('/events')
  }

ngAfterViewInit() {
//Parameters for Artists Carosusel
  this.viewer.speed = 750;
  this.viewer.pager = true;
  this.viewer.slidesPerView = 3;
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
    let modal = this.modalCtrl.create(SignInModalPage);
    modal.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  goToArtistView(item) {
    console.log('sssss');
    console.log(item);
    this.navCtrl.push(FansViewBandsPortfolioPage, item);
  }

  goToEventView(item) {
    console.log('sssss');
    console.log(item);
    this.navCtrl.push(FansViewBandsEventsPage, item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RadioPage');
    //console.log(this.navParams.data);
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { FansViewBandsPortfolioPage } from '../fans-view-bands-portfolio/fans-view-bands-portfolio';
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
  fansViewBandsPortfolio = FansViewBandsPortfolioPage;
  viewAllTrendingArtists = ViewAllTrendingArtistsPage;
  viewAllTrendingVideos = ViewAllTrendingVideosPage;
  viewAllTrendingEvents = ViewAllTrendingEventsPage;

  //This code makes sure the database lists are visible in the Bands profile
    albums: FirebaseListObservable<any>
    members: FirebaseListObservable<any>
    videos: FirebaseListObservable<any>
    events: FirebaseListObservable<any>

    video

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
  public viewCtrl: ViewController, public af: AngularFire) {

  this.albums = af.database.list('/albums')
  this.members = af.database.list('/members')
  this.videos = af.database.list('/videos')
  this.events = af.database.list('/events')

  console.log(this.videos);
  }

//Present Sign Modal for RadioWRX User
  presentSignInModal() {
    let modal = this.modalCtrl.create(SignInModalPage);
    modal.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  goToArtistView() {
    this.navCtrl.push(FansViewBandsPortfolioPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RadioPage');
  }

}

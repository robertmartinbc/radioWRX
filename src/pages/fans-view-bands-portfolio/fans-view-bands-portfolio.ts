import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { FansViewBandsByFansPage } from '../fans-view-bands-by-fans/fans-view-bands-by-fans';
import { FansViewBandsCDFundsPage } from '../fans-view-bands-cd-funds/fans-view-bands-cd-funds';
import { FansViewBandsMembersPage } from '../fans-view-bands-members/fans-view-bands-members';
import { FansViewBandsPrivatePartyPage } from '../fans-view-bands-private-party/fans-view-bands-private-party';
import { FansViewBandsEventsPage } from '../fans-view-bands-events/fans-view-bands-events';
import { FansViewBandsAlbumPage } from '../fans-view-bands-album/fans-view-bands-album';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';

/*
  Generated class for the FansViewBandsPortfolio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fans-view-bands-portfolio',
  templateUrl: 'fans-view-bands-portfolio.html'
})

//Set sliders
export class FansViewBandsPortfolioPage {
  @ViewChild('memberSlider') viewer: Slides;
  @ViewChild('musicSlider') viewer1: Slides;
  @ViewChild('videoSlider') viewer2: Slides;
  @ViewChild('eventSlider') viewer3: Slides;

  //This code makes sure the database lists are visible in the Bands profile
  albums: FirebaseListObservable<any>
  members: FirebaseListObservable<any>
  videos: FirebaseListObservable<any>
  events: FirebaseListObservable<any>

  albumTitle: string = this.navParams.get('albumTitle');
  albumDuration: string = this.navParams.get('albumDuration');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {

    this.albums = af.database.list('/albums')
    this.members = af.database.list('/members')
    this.videos = af.database.list('/videos')
    this.events = af.database.list('/events')
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
  }

  goToAlbumView(item) {
    this.navCtrl.push(FansViewBandsAlbumPage, item);
  }


  fansViewBandsByFans = FansViewBandsByFansPage;
  fansViewBandsCDFunds = FansViewBandsCDFundsPage;
  fansViewBandsMembers = FansViewBandsMembersPage;
  fansViewBandsPrivateParty = FansViewBandsPrivatePartyPage;
  fansViewBandsEvents = FansViewBandsEventsPage;




  ionViewDidLoad() {
    console.log(this.navParams.data);
  }

}

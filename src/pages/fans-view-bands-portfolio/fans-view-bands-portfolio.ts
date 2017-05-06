import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, ToastController, ModalController } from 'ionic-angular';
import { FansViewBandsByFansPage } from '../fans-view-bands-by-fans/fans-view-bands-by-fans';
import { FansViewBandsCDFundsPage } from '../fans-view-bands-cd-funds/fans-view-bands-cd-funds';
import { FansViewBandsMembersPage } from '../fans-view-bands-members/fans-view-bands-members';
import { FansViewBandsPrivatePartyPage } from '../fans-view-bands-private-party/fans-view-bands-private-party';
import { FansViewBandsEventsPage } from '../fans-view-bands-events/fans-view-bands-events';
import { FansViewBandsAlbumPage } from '../fans-view-bands-album/fans-view-bands-album';
import { SignInModalPage } from '../sign-in-modal/sign-in-modal';

import * as firebase from 'firebase';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

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
  isLoggedIn: boolean = false;

  albumTitle: string = this.navParams.get('albumTitle');
  albumDuration: string = this.navParams.get('albumDuration');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire,
  public toastCtrl: ToastController, public modalCtrl: ModalController) {

    //Check to see if user is logged in
    var _self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user)
        _self.isLoggedIn=true;
      else
        _self.isLoggedIn=false;
    });

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

  goToMemberView(item) {
    this.navCtrl.push(FansViewBandsMembersPage, item);
  }

  goToEventView(item) {
    this.navCtrl.push(FansViewBandsEventsPage, item);
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


/*
//Create toasts to advise customers to register to access features
  showBandsByFansToast() {
    let toast = this.toastCtrl.create({
      message: 'You need to become a registered RadioWRX customer to access Bands By Fans Features!',
      duration: 4000,
      position: 'middle',
      cssClass: 'style-toast',
    });
    toast.present();
  }

  showPrivatePartyToast() {
    let toast = this.toastCtrl.create({
      message: 'You need to become a registered RadioWRX customer to access Private Party Features!',
      duration: 4000,
      position: 'middle',
      cssClass: 'style-toast',
    });
    toast.present();
  }

  showCDFundsToast() {
    let toast = this.toastCtrl.create({
      message: 'You need to become a registered RadioWRX customer to access Private Party Features!',
      duration: 4000,
      position: 'middle',
      cssClass: 'style-toast',
    });
    toast.present();
  }

  showEventsToast() {
    let toast = this.toastCtrl.create({
      message: 'You need to become a registered RadioWRX customer to access Events Features!',
      duration: 4000,
      position: 'middle',
      cssClass: 'style-toast',
    });
    toast.present();
  }

  showLikesToast() {
    let toast = this.toastCtrl.create({
      message: 'You need to become a registered RadioWRX customer to Like a band!',
      duration: 4000,
      position: 'middle',
      cssClass: 'style-toast',
    });
    toast.present();
  }

  showCommentsToast() {
    let toast = this.toastCtrl.create({
      message: 'You need to become a registered RadioWRX customer to comment on a band!',
      duration: 4000,
      position: 'middle',
      cssClass: 'style-toast',
    });
    toast.present();
  }
*/


  fansViewBandsByFans = FansViewBandsByFansPage;
  fansViewBandsCDFunds = FansViewBandsCDFundsPage;
  fansViewBandsMembers = FansViewBandsMembersPage;
  fansViewBandsPrivateParty = FansViewBandsPrivatePartyPage;
  fansViewBandsEvents = FansViewBandsEventsPage;




  ionViewDidLoad() {
    console.log(this.navParams.data);
  }

}

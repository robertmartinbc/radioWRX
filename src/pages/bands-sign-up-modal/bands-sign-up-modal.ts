import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { BandsSignInModalPage } from '../bands-sign-in-modal/bands-sign-in-modal';
import { AuthProviders, AuthMethods, AngularFire } from 'angularfire2';
import * as firebase from 'firebase';

/*
  Generated class for the BandsSignUpModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bands-sign-up-modal',
  templateUrl: 'bands-sign-up-modal.html'
})
export class BandsSignUpModalPage {

//Set variables for Firebase authentication Sign Up New User
private data: any;
public fireAuth: any;
public userProfile: any;
public email: string;
public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, public af: AngularFire) {

    this.fireAuth = firebase.auth();
    //this.userProfile = firebase.database('users');
  }

//Sign up new user
  signUpUser() {
    this.fireAuth.createUserWithEmailAndPassword(this.email, this.password).
    then((user) => {
      this.fireAuth.signInWithEmailAndPassword(this.email, this.password);
    })
    this.viewCtrl.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

//Present Modal for Bands Sign In
  presentBandsSignInModal1() {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(BandsSignInModalPage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandsSignUpModalPage');
  }

}

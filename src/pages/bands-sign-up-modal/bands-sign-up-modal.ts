import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { BandsSignInModalPage } from '../bands-sign-in-modal/bands-sign-in-modal';
import { AuthProviders, AuthMethods, AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { LoadingController, AlertController } from "ionic-angular";
import { AuthService } from '../../services/auth';

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
  public email: string;  
  public password: string;
  public profiles: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public viewCtrl: ViewController, public modalCtrl: ModalController,
  public af: AngularFire, private loadingCtrl: LoadingController,
  private alertCtrl: AlertController, public authService: AuthService) {
    this.fireAuth = firebase.auth();
  }

  onSignUp(af, db) {
    var user = null;
    const loading = this.loadingCtrl.create({
      content: 'Signing you up'
    });
    loading.present();

    this.authService.signup(this.email, this.password, 'band')
    .then(function () {
      user = firebase.auth().currentUser;
      db = af.database.list('/userProfiles');
      db.push({userId:user.uid, kind:'band'});
    })
    .then(data => {
      loading.dismiss();
      this.viewCtrl.dismiss();
    })
    .catch(error => {
      loading.dismiss();
      const alert = this.alertCtrl.create({
        title: 'Signup failed!',
        message: error.message,
        buttons: ['Ok']
      })
      alert.present();
    });
  }
/*
//Sign up new user
  signUpUser() {
    const loading = this.loadingCtrl.create({
    content: 'Creating your account...'
    });
    loading.present();
    this.fireAuth.createUserWithEmailAndPassword(this.email, this.password)
    .then(data => {
      loading.dismiss();
    })
    .catch(error => {
      loading.dismiss();
      const alert = this.alertCtrl.create({
        title: 'Signup failed!',
        message: error.message,
        buttons: ['Ok']
      });
      alert.present();
    });
    this.viewCtrl.dismiss();
  }
*/
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

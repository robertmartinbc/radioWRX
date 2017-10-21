import * as firebase from 'firebase';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController, AlertController, LoadingController } from 'ionic-angular';
import { FansSignInModalPage } from '../fans-sign-in-modal/fans-sign-in-modal';

import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'page-fans-sign-up-modal',
  templateUrl: 'fans-sign-up-modal.html'
})

export class FansSignUpModalPage {

  //Set variables for Firebase authentication Sign Up New User
  //private data: any;
  public fireAuth: any;
  public email: string;
  public password: string;
  public profiles: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
  public modalCtrl: ModalController, public loadingCtrl: LoadingController, public af: AngularFireDatabase,
  public authService: AuthService, private alertCtrl: AlertController) {

    this.fireAuth = firebase.auth();

  }

    onSignUp(af, db) {
      var user = null;
      const loading = this.loadingCtrl.create({
        content: 'Signing you up'
      });
      loading.present();

      this.authService.signup(this.email, this.password)
      .then(function () {
        user = firebase.auth().currentUser;
        db = af.database.list('/userProfiles');
        db.push({userId:user.uid, kind:'fan'});
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

  dismiss() {
    this.viewCtrl.dismiss();
  }

  presentFansSignInModal1() {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(FansSignInModalPage);
    modal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FansSignUpModalPage');
  }

}

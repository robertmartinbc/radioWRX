import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { BandsSignUpModalPage } from '../bands-sign-up-modal/bands-sign-up-modal';
import { AuthProviders, AuthMethods, AngularFire } from 'angularfire2';

/*
  Generated class for the BandsSignInModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bands-sign-in-modal',
  templateUrl: 'bands-sign-in-modal.html'
})
export class BandsSignInModalPage {
  email: any
  password: any
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, public af: AngularFire) {}



//Login code for Bands with form login
  login () {
    this.af.auth.login ({
      email: this.email,
      password: this.password
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    }).then((response) => {
      console.log('Login success' + JSON.stringify(response));
      let currentuser = {
        email: response.auth.email,
        picture: response.auth.photoURL
      };
      window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
      this.navCtrl.pop();
    })
  }

//Login code for Bands using Twitter
  twitterlogin(){
    this.af.auth.login({
    provider: AuthProviders.Twitter,
    method: AuthMethods.Popup
    }).then((response) => {
      console.log('Login successful with Twitter' + JSON.stringify(response));
      let currentuser = {
        email: response.auth.email,
        picture: response.auth.photoURL
      };
      window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
      this.navCtrl.pop();
    })
  }

//login code for Bands using Facebook
facebooklogin(){
    this.af.auth.login({
    provider: AuthProviders.Facebook,
    method: AuthMethods.Popup
    }).then((response) => {
      console.log('Login successful with Twitter' + JSON.stringify(response));
      let currentuser = {
        email: response.auth.email,
        picture: response.auth.photoURL
      };
      window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
      this.navCtrl.pop();
    })
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  presentBandsSignUpModal() {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(BandsSignUpModalPage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandsSignInModalPage');
  }

}

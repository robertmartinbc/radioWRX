import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController, AlertController, LoadingController } from 'ionic-angular';
import { BandsSignUpModalPage } from '../bands-sign-up-modal/bands-sign-up-modal';
import { BandsViewBandsProfilePage } from '../bands-view-bands-profile/bands-view-bands-profile';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2/database-deprecated';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'page-bands-sign-in-modal',
  templateUrl: 'bands-sign-in-modal.html'
})

export class BandsSignInModalPage {

  email: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public viewCtrl: ViewController, public modalCtrl: ModalController,
  public af: AngularFireDatabase, private loadingCtrl: LoadingController, private alertCtrl: AlertController,
  private authService: AuthService) {}

  //Sign in user and check to see if there is existing account and present error
  onSignIn() {
    const loading = this.loadingCtrl.create({
    content: 'Signing you in...'
  });
  loading.present()
    this.authService.signin(this.email, this.password)
    .then(data => {
      loading.dismiss()
      this.navCtrl.push(BandsViewBandsProfilePage)
    })
    .catch(error => {
      loading.dismiss();
      const alert = this.alertCtrl.create ({
        title: 'Signin failed!',
        message: error.message,
        buttons: ['Ok']
      })
      alert.present();
    });
    this.viewCtrl.dismiss();
  }
  /*
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
    */
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

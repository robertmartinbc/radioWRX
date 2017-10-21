import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController, AlertController, LoadingController } from 'ionic-angular';
import { FansSignUpModalPage } from '../fans-sign-up-modal/fans-sign-up-modal';
<<<<<<< HEAD
import { BandsViewBandsProfilePage } from '../bands-view-bands-profile/bands-view-bands-profile';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
=======
//import { BandsViewBandsProfilePage } from '../bands-view-bands-profile/bands-view-bands-profile';
import { AngularFire } from 'angularfire2';
>>>>>>> ed53e018352edb8e447e2bddf46b19e78b786550
import { AuthService } from '../../services/auth';

@Component({
  selector: 'page-fans-sign-in-modal',
  templateUrl: 'fans-sign-in-modal.html'
})

export class FansSignInModalPage {

  email: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
  public modalCtrl: ModalController, public loadingCtrl: LoadingController, public af: AngularFireDatabase,
  public alertCtrl: AlertController, private authService: AuthService) {}

  //bandsViewBandsProfile = BandsViewBandsProfilePage;

  //Sign in user and check to see if there is existing account and present error
  onSignIn() {
    const loading = this.loadingCtrl.create({
    content: 'Signing you in...'
  });
  loading.present()
    this.authService.signin(this.email, this.password)
    .then(data => {
      loading.dismiss()
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

  dismiss() {
    this.viewCtrl.dismiss();
  }

  presentFansSignUpModal() {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(FansSignUpModalPage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FansSignInModalPage');
  }

}

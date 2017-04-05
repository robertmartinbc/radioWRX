import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { FansSignInModalPage } from '../fans-sign-in-modal/fans-sign-in-modal';
import { BandsSignInModalPage } from '../bands-sign-in-modal/bands-sign-in-modal';

/*
  Generated class for the FansSignInModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sign-in-modal',
  templateUrl: 'sign-in-modal.html'
})
export class SignInModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }

  presentFansSignInModal() {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(FansSignInModalPage);
    modal.present();
  }

  presentBandsSignInModal() {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(BandsSignInModalPage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInModalPage');
  }

}

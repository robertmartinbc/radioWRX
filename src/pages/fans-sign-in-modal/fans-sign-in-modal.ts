import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { FansSignUpModalPage } from '../fans-sign-up-modal/fans-sign-up-modal';
/*
  Generated class for the FansSignInModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fans-sign-in-modal',
  templateUrl: 'fans-sign-in-modal.html'
})
export class FansSignInModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {}

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

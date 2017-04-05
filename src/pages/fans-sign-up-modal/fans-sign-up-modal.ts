import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { FansSignInModalPage } from '../fans-sign-in-modal/fans-sign-in-modal';

/*
  Generated class for the FansSignUpModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fans-sign-up-modal',
  templateUrl: 'fans-sign-up-modal.html'
})
export class FansSignUpModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {}

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

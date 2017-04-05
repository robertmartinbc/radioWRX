import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { BandsSignUpModalPage } from '../bands-sign-up-modal/bands-sign-up-modal';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {}

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

import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { BandsSignInModalPage } from '../bands-sign-in-modal/bands-sign-in-modal';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }

  presentBandsSignInModal1() {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(BandsSignInModalPage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandsSignUpModalPage');
  }

}

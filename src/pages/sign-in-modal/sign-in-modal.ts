import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }

  openNew() {
    this.viewCtrl.dismiss();
    alert("Bollocks!");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInModalPage');
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';


@Component({
  selector: 'page-my-bands-by-fans',
  templateUrl: 'my-bands-by-fans.html'
})
export class MyBandsByFansPage {

  bandsByFans: string = "present";

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyBandsByFansPage');
  }

}

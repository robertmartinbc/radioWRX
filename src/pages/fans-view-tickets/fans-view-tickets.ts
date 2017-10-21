import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

@Component({
  selector: 'page-fans-view-tickets',
  templateUrl: 'fans-view-tickets.html'
})

export class FansViewTicketsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FansViewTicketsPage');
  }

}

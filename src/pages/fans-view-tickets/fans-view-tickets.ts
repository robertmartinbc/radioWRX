import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'page-fans-view-tickets',
  templateUrl: 'fans-view-tickets.html'
})

export class FansViewTicketsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FansViewTicketsPage');
  }

}

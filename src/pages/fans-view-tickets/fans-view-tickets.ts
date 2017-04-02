import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the FansViewTickets page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fans-view-tickets',
  templateUrl: 'fans-view-tickets.html'
})
export class FansViewTicketsPage {

  latitude: number = -123.36564440000001;
  longitude: number = 48.4284207;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FansViewTicketsPage');
  }

}

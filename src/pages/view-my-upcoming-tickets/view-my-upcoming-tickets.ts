import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ViewMyUpcomingTickets page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-view-my-upcoming-tickets',
  templateUrl: 'view-my-upcoming-tickets.html'
})
export class ViewMyUpcomingTicketsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewMyUpcomingTicketsPage');
  }

}

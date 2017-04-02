import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FansViewTicketsPage } from '../fans-view-tickets/fans-view-tickets';


/*
  Generated class for the Tickets page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html'
})
export class TicketsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  fansViewTickets = FansViewTicketsPage;
  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketsPage');
  }

}

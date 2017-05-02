import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-my-tickets',
  templateUrl: 'my-tickets.html'
})
export class MyTicketsPage {

  tickets: string = "present";

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTicketsPage');
  }

}

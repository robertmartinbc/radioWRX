import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FansViewBandsPortfolioPage } from '../fans-view-bands-portfolio/fans-view-bands-portfolio';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

//Create class for a purchase of Bands By Fans request
class PurchaseBandsByFans {
  bandName: string
  totalTicketsRequired: string
  totalTicketAmount: string
  fundedCity: string
  fundedCountry: string
  bandImage: string
  bandId: string
  userId: string
}


@Component({
  selector: 'page-fans-view-bands-by-fans',
  templateUrl: 'fans-view-bands-by-fans.html'
})

export class FansViewBandsByFansPage {

  totalTicketsRequired;
  totalTicketAmount;
  ticketPrice: number = 30;
  purchasebandsbyfans: PurchaseBandsByFans = new PurchaseBandsByFans()

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {}

  //Set value of tickets required and total ticket amount to be purchased.

  getTicketValue() {
    this.totalTicketsRequired = this.purchasebandsbyfans.totalTicketsRequired
    console.log(this.totalTicketsRequired);
      if(this.totalTicketsRequired === "1") {
        this.totalTicketAmount = this.ticketPrice * this.totalTicketsRequired;
        this.purchasebandsbyfans.totalTicketAmount = this.totalTicketAmount;
        console.log("You are purchasing 2 tickets!" + this.totalTicketAmount);
    } else if(this.totalTicketsRequired === "2") {
        this.totalTicketAmount = this.ticketPrice * this.totalTicketsRequired;
        this.purchasebandsbyfans.totalTicketAmount = this.totalTicketAmount;
        console.log("You are purchasing 3 tickets!" + this.totalTicketAmount);
    } else if(this.totalTicketsRequired === "3") {
        this.totalTicketAmount = this.ticketPrice * this.totalTicketsRequired;
        this.purchasebandsbyfans.totalTicketAmount = this.totalTicketAmount;
        console.log("You are purchasing 4 tickets!" + this.totalTicketAmount);
    } else if(this.totalTicketsRequired === "4") {
        this.totalTicketAmount = this.ticketPrice * this.totalTicketsRequired;
        this.purchasebandsbyfans.totalTicketAmount = this.totalTicketAmount;
        console.log("You are purchasing 1 ticket!" + this.totalTicketAmount);
      }
    }

  submit() {
    this.purchasebandsbyfans.userId = firebase.auth().currentUser.uid;
    this.af.list('/purchasebandsbyfans').push(this.purchasebandsbyfans)
    this.purchasebandsbyfans = new PurchaseBandsByFans()
    this.navCtrl.pop(FansViewBandsPortfolioPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FansViewBandsByFansPage');
  }

}

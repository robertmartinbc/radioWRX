import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FansViewBandsPortfolioPage } from '../fans-view-bands-portfolio/fans-view-bands-portfolio';
import { AngularFire } from 'angularfire2';

//Create class for a purchase of Bands By Fans request
class PurchaseBandsByFans {
  bandName: string
  totalTicketsRequiredBullshit: string
  totalTicketAmountBullshit: string
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

  //FIX ME --- Values not being parsed through the input field. Does not like the  use
  //of purchasebandsbyfans.totalTicketsRequired and cannot add to value of input.
  
  totalTicketsRequired: number = 0;
  totalTicketAmount: number = 0;
  ticketPrice: number = 30;
  oneTicket: number = 1;
  twoTicket: number = 2;
  threeTicket: number = 3;
  fourTicket: number = 4;
  purchasebandsbyfans: PurchaseBandsByFans = new PurchaseBandsByFans()
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {}

  //Set value of tickets required and total ticket amount to be purchased.

  getOneTicketValue() {
    var ticketNumber = this.oneTicket;
    var oneTicketPrice = this.ticketPrice;
    this.totalTicketsRequired = ticketNumber;
    this.totalTicketAmount = oneTicketPrice * ticketNumber;
    alert(ticketNumber);
    alert(oneTicketPrice);
  }

  getTwoTicketValue() {
    var ticketNumber = this.twoTicket;
    var twoTicketPrice = this.ticketPrice;
    this.totalTicketsRequired = ticketNumber;
    this.totalTicketAmount = twoTicketPrice * ticketNumber;
    alert(ticketNumber);
    alert(twoTicketPrice);
  }

  getThreeTicketValue() {
    var ticketNumber = this.threeTicket;
    var threeTicketPrice = this.ticketPrice;
    this.totalTicketsRequired = ticketNumber;
    this.totalTicketAmount = threeTicketPrice * ticketNumber;
    alert(ticketNumber);
    alert(threeTicketPrice);
  }

  getFourTicketValue() {
    var ticketNumber = this.fourTicket;
    var fourTicketPrice = this.ticketPrice;
    this.totalTicketsRequired = ticketNumber;
    this.totalTicketAmount = fourTicketPrice * ticketNumber;
    alert(ticketNumber);
    alert(fourTicketPrice);
  }

  submit() {
    //this.album.userId = firebase.auth().currentUser.uid;
    this.af.database.list('/purchasebandsbyfans').push(this.purchasebandsbyfans)
    this.purchasebandsbyfans = new PurchaseBandsByFans()
    this.navCtrl.pop(FansViewBandsPortfolioPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FansViewBandsByFansPage');
  }

}

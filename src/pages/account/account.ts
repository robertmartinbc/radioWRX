import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyBandsByFansPage } from '../my-bands-by-fans/my-bands-by-fans';
import { MyCDFundsPage } from '../my-cd-funds/my-cd-funds';
import { MyPortfolioPage } from '../my-portfolio/my-portfolio';
import { MyPrivatePartyPage } from '../my-private-party/my-private-party';
import { MyTicketsPage } from '../my-tickets/my-tickets';

/*
  Generated class for the Account page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  bandsByFansPage = MyBandsByFansPage;
  cdFundsPage = MyCDFundsPage;
  portfolioPage = MyPortfolioPage;
  privatePartyPage = MyPrivatePartyPage
  myTicketsPage = MyTicketsPage;
  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

}

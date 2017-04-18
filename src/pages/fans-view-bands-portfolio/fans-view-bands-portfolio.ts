import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FansViewBandsByFansPage } from '../fans-view-bands-by-fans/fans-view-bands-by-fans';
import { FansViewBandsCDFundsPage } from '../fans-view-bands-cd-funds/fans-view-bands-cd-funds';
import { FansViewBandsMembersPage } from '../fans-view-bands-members/fans-view-bands-members';
import { FansViewBandsPrivatePartyPage } from '../fans-view-bands-private-party/fans-view-bands-private-party';
import { FansViewBandsEventsPage } from '../fans-view-bands-events/fans-view-bands-events';

/*
  Generated class for the FansViewBandsPortfolio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fans-view-bands-portfolio',
  templateUrl: 'fans-view-bands-portfolio.html'
})

export class FansViewBandsPortfolioPage {

  albumTitle: string = this.navParams.get('albumTitle');
  albumDuration: string = this.navParams.get('albumDuration');




  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  fansViewBandsByFans = FansViewBandsByFansPage;
  fansViewBandsCDFunds = FansViewBandsCDFundsPage;
  fansViewBandsMembers = FansViewBandsMembersPage;
  fansViewBandsPrivateParty = FansViewBandsPrivatePartyPage;
  fansViewBandsEvents = FansViewBandsEventsPage;

  ionViewDidLoad() {
    console.log(this.navParams.data);
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { EditBandsCDFundsDetailsPage } from '../edit-bands-cd-funds-details/edit-bands-cd-funds-details'
import { RegisterCDFundsPackages } from '../register-cd-funds-packages/register-cd-funds-packages'

/*
  Generated class for the BandsViewBandsCDFunds page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bands-view-bands-cd-funds',
  templateUrl: 'bands-view-bands-cd-funds.html'
})
export class BandsViewBandsCDFundsPage {

  targetDate: string = this.navParams.get('targetDate');
  targetAmount: string = this.navParams.get('targetAmount');

  public editTargetDate: any;
  public editTargetAmount: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {}

  goToEditBandsCDFunds() {
    this.navCtrl.push(EditBandsCDFundsDetailsPage, {
      editTargetDate: this.targetDate,
      editTargetAmount: this.targetAmount
    });
  }

  goToRegisterCDFundsPackages() {
    this.navCtrl.push(RegisterCDFundsPackages);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandsViewBandsCDFundsPage');
  }

}

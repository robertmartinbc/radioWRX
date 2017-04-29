import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire } from 'angularfire2';

/*
  Generated class for the BandsViewBandsMembers page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bands-view-bands-members',
  templateUrl: 'bands-view-bands-members.html'
})
export class BandsViewBandsMembersPage {

//This code makes sure the database members lists are visible in the Bands profile

  memberName: string = this.navParams.get('memberName');
  memberBiography: string = this.navParams.get('memberBiography');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandsViewBandsMembersPage');
  }

}

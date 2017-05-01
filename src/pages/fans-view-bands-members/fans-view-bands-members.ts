import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-fans-view-bands-members',
  templateUrl: 'fans-view-bands-members.html'
})
export class FansViewBandsMembersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  memberName = this.navParams.get('memberName');
  memberBiography = this.navParams.get('memberBiography');

  ionViewDidLoad() {
    console.log('ionViewDidLoad FansViewBandsMembersPage');
  }

}

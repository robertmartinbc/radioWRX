import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire } from 'angularfire2';

/*
  Generated class for the RegisterBandsMembersDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

class Member {
  memberName: string
  memberBiography: string
  vocals: boolean
  guitar
  bass
  drums
  piano
  id: string
  userId: string
}

@Component({
  selector: 'page-register-bands-members-details',
  templateUrl: 'register-bands-members-details.html'
})
export class RegisterBandsMembersDetailsPage {
  member: Member = new Member()
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {}

  submit(){
  this.af.database.list('/members').push(this.member)
  this.member = new Member()
  this.navCtrl.pop(RegisterBandsMembersDetailsPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterBandsMembersDetailsPage');
  }

}

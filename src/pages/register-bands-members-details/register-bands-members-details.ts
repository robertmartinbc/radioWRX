import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';


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
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {}

  submit(){
    this.member.userId = firebase.auth().currentUser.uid;
    this.af.list('/members').push(this.member)
    this.member = new Member()
    this.navCtrl.pop(RegisterBandsMembersDetailsPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterBandsMembersDetailsPage');
  }

}

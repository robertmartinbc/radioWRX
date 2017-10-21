import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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
  selector: 'page-edit-bands-members-details',
  templateUrl: 'edit-bands-members-details.html'
})
export class EditBandsMembersDetailsPage {
  members: FirebaseListObservable<any>

  editMemberName: string = this.navParams.get('editMemberName');
  editMemberBiography: string = this.navParams.get('editMemberBiography');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditBandsMembersDetailsPage');
    console.log(this.editMemberName);
  }

/*
  deleteBandMember() {
    this.af("/members/").remove().$key;
  }
  */

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditBandsMembersDetailsPage');
    console.log(this.editMemberName);
  }

}

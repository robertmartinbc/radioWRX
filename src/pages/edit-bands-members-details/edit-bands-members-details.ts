import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the EditBandsMembersDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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

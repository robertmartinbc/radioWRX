import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { EditBandsMembersDetailsPage } from '../edit-bands-members-details/edit-bands-members-details';

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
  members: FirebaseListObservable<any>

  memberName: string = this.navParams.get('memberName');
  memberBiography: string = this.navParams.get('memberBiography');

  public editMemberName: any;
  public editMemberBiography: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {}

  goToEditBandsMembers() {
    this.navCtrl.push(EditBandsMembersDetailsPage, {
      editMemberName: this.memberName,
      editMemberBiography: this.memberBiography
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandsViewBandsMembersPage');
  }

}

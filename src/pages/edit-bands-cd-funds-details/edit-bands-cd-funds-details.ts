import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

/*
  Generated class for the EditBandsCDFundsDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit-bands-cd-funds-details',
  templateUrl: 'edit-bands-cd-funds-details.html'
})
export class EditBandsCDFundsDetailsPage {
  cdfunds: FirebaseListObservable<any>

  editTargetDate: string = this.navParams.get('editTargetDate');
  editTargetAmount: string = this.navParams.get('editTargetAmount');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditBandsCDFundsDetailsPage');
  }

}

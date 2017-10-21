import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

/*
  Generated class for the EditBandsVideosDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit-bands-videos-details',
  templateUrl: 'edit-bands-videos-details.html'
})
export class EditBandsVideosDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditBandsVideosDetailsPage');
  }

}

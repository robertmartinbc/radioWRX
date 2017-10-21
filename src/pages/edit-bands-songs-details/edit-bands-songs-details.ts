import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

@Component({
  selector: 'page-edit-bands-songs-details',
  templateUrl: 'edit-bands-songs-details.html'
})
export class EditBandsSongsDetailsPage {

  songs: FirebaseListObservable<any>

  editSongTitle: string = this.navParams.get('editSongTitle');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditBandsSongsDetailsPage');
    console.log(this.editSongTitle);
  }

}

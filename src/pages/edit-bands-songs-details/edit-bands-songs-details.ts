import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-edit-bands-songs-details',
  templateUrl: 'edit-bands-songs-details.html'
})
export class EditBandsSongsDetailsPage {

  songs: FirebaseListObservable<any>

  editSongTitle: string = this.navParams.get('editSongTitle');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditBandsSongsDetailsPage');
    console.log(this.editSongTitle);
  }

}

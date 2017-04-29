import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-edit-bands-songs-details',
  templateUrl: 'edit-bands-songs-details.html'
})
export class EditBandsSongsDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditBandsSongsDetailsPage');
  }

}

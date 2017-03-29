import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ViewAllTrendingArtists page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-view-all-trending-artists',
  templateUrl: 'view-all-trending-artists.html'
})
export class ViewAllTrendingArtistsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewAllTrendingArtistsPage');
  }

}

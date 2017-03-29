import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ViewAllTrendingVideos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-view-all-trending-videos',
  templateUrl: 'view-all-trending-videos.html'
})
export class ViewAllTrendingVideosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewAllTrendingVideosPage');
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

/*
  Generated class for the RegisterBandsVideosDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

class Video {
  videoTitle: string
  videoURL: string
  id: string
  userId: string
}

@Component({
  selector: 'page-register-bands-videos-details',
  templateUrl: 'register-bands-videos-details.html'
})
export class RegisterBandsVideosDetailsPage {
  video: Video = new Video()
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {}

  submit() {
    this.video.userId = firebase.auth().currentUser.uid;
    this.af.list('/videos').push(this.video)
    this.video = new Video()
    this.navCtrl.pop(RegisterBandsVideosDetailsPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterBandsVideosDetailsPage');
  }

}

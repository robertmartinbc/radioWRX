import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BandsViewBandsProfilePage } from '../bands-view-bands-profile/bands-view-bands-profile';
import { AngularFire } from 'angularfire2';

//Create class for a new Bands By Fans Request
class BandsByFans {
  chosenCountry: string
  chosenTown: string
  ticketPrice: string
  ticketsRequired: string
}

/*
  Generated class for the RegisterBandsByFansDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register-bands-by-fans-details',
  templateUrl: 'register-bands-by-fans-details.html'
})
export class RegisterBandsByFansDetailsPage {
  bandsbyfans: BandsByFans = new BandsByFans()
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {}

  submit() {
    //this.album.userId = firebase.auth().currentUser.uid;
    this.af.database.list('/bandsbyfans').push(this.bandsbyfans)
    this.bandsbyfans = new BandsByFans()
    this.navCtrl.pop(BandsViewBandsProfilePage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterBandsByFansDetailsPage');
  }

}

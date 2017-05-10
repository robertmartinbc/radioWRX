import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'page-bands-view-bands-private-party',
  templateUrl: 'bands-view-bands-private-party.html'
})

  export class BandsViewBandsPrivatePartyPage {

  privateparty: FirebaseListObservable<any>

  parties: string = "upcoming";


  ionViewDidLoad() {
    console.log('ionViewDidLoad BandsViewBandsPrivatePartyPage');
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {

    this.privateparty = af.database.list('/privateparty')

  }

}

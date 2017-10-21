import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {

    this.privateparty = af.list('/privateparty')

  }

}

import { Component } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

import { NavController, NavParams } from 'ionic-angular';
import { ViewMyPastPrivatePartyPage } from '../view-my-past-private-party/view-my-past-private-party';
import { ViewMyPresentPrivatePartyPage } from '../view-my-present-private-party/view-my-present-private-party';

@Component({
  selector: 'page-my-private-party',
  templateUrl: 'my-private-party.html'
})

export class MyPrivatePartyPage {

  privateparty: FirebaseListObservable<any>

  privateParty: string = "present";

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {

    this.privateparty = af.list('/privateparty')

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPrivatePartyPage');
  }

  goToViewPresentPrivateParty(item) {
    this.navCtrl.push(ViewMyPresentPrivatePartyPage, item);
  }

  goToViewPastPrivateParty(item) {
    this.navCtrl.push(ViewMyPastPrivatePartyPage, item);
  }

}

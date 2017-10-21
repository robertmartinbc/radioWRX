import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

/*
  Generated class for the EditBandsByFansDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit-bands-by-fans-details',
  templateUrl: 'edit-bands-by-fans-details.html'
})
export class EditBandsByFansDetailsPage {
  bandsbyfans: FirebaseListObservable<any>

  editChosenCountry: string = this.navParams.get('editChosenCountry');
  editChosenTown: string = this.navParams.get('editChosenTown');
  editTicketPrice: string = this.navParams.get('editTicketPrice');
  editTicketsRequired: string = this.navParams.get('editTicketsRequired');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditBandsByFansDetailsPage');
  }

}

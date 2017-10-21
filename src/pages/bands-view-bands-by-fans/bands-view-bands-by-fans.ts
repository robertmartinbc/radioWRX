import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { EditBandsByFansDetailsPage } from '../edit-bands-by-fans-details/edit-bands-by-fans-details';

@Component({
  selector: 'page-bands-view-bands-by-fans',
  templateUrl: 'bands-view-bands-by-fans.html'
})
export class BandsViewBandsByFansPage {

  chosenCountry: string = this.navParams.get('chosenCountry');
  chosenTown: string = this.navParams.get('chosenTown');
  ticketPrice: string = this.navParams.get('ticketPrice');
  ticketsRequired: string = this.navParams.get('ticketsRequired');

  public editChosenCountry: any;
  public editChosenTown: any;
  public editTicketPrice: any;
  public editTicketsRequired: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {}

  goToEditBandsByFans() {
    this.navCtrl.push(EditBandsByFansDetailsPage, {
      editChosenCountry: this.chosenCountry,
      editChosenTown: this.chosenTown,
      editTicketPrice: this.ticketPrice,
      editTicketsRequired: this.ticketsRequired
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandsViewBandsByFansPage');
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

@Component({
  selector: 'page-edit-bands-album-details',
  templateUrl: 'edit-bands-album-details.html'
})

export class EditBandsAlbumDetailsPage {
  albums: FirebaseListObservable<any>

  editAlbumTitle: string = this.navParams.get('editAlbumTitle');
  editYearReleased: string = this.navParams.get('editYearReleased');
  editAlbumTotalSongs: string = this.navParams.get('editAlbumTotalSongs');
  editAlbumDuration: string = this.navParams.get('editAlbumDuration');
  editAlbumUPCCode: string = this.navParams.get('editAlbumUPCCode');
  editAlbumGenre: string = this.navParams.get('editAlbumGenre');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditBandsAlbumDetailsPage');
    console.log(this.editAlbumTitle);
  }

}

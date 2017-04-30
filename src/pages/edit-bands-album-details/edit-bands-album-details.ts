import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditBandsAlbumDetailsPage');
    console.log(this.editAlbumTitle);
  }

}

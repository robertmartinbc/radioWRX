import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterBandsSongsDetailsPage } from '../register-bands-songs-details/register-bands-songs-details';
import { EditBandsSongsDetailsPage } from '../edit-bands-songs-details/edit-bands-songs-details';
import { EditBandsAlbumDetailsPage } from '../edit-bands-album-details/edit-bands-album-details';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the BandsViewAlbum page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bands-view-album',
  templateUrl: 'bands-view-album.html'
})

export class BandsViewAlbumPage {

//This code makes sure the database lists are visible in the Bands profile
  songs: FirebaseListObservable<any>

  albumTitle: string = this.navParams.get('albumTitle');
  albumYearReleased: string = this.navParams.get('albumYearReleased');
  albumDuration: string = this.navParams.get('albumDuration');
  albumTotalSongs: string = this.navParams.get('albumTotalSongs');
  albumGenre: string = this.navParams.get('albumGenre');
  albumId: string = this.navParams.get('$key');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {

    this.songs = af.database.list('/songs')
  }

  goToEditAlbumDetails() {
    this.navCtrl.push(EditBandsAlbumDetailsPage);
  }

  test() {
    alert("This button was pressed!");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandsViewAlbumPage');
  }

  registerBandsSongsDetails = RegisterBandsSongsDetailsPage;
  editBandsSongsDetails = EditBandsSongsDetailsPage;

}

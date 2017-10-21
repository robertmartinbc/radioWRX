import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterBandsSongsDetailsPage } from '../register-bands-songs-details/register-bands-songs-details';
import { EditBandsSongsDetailsPage } from '../edit-bands-songs-details/edit-bands-songs-details';
import { EditBandsAlbumDetailsPage } from '../edit-bands-album-details/edit-bands-album-details';
import { AngularFireModule} from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

@Component({
  selector: 'page-bands-view-album',
  templateUrl: 'bands-view-album.html'
})

export class BandsViewAlbumPage {

//This code makes sure the database lists are visible in the Bands profile
  songs: FirebaseListObservable<any>
  albums: FirebaseListObservable<any>

  albumTitle: string = this.navParams.get('albumTitle');
  albumYearReleased: string = this.navParams.get('albumYearReleased');
  albumDuration: string = this.navParams.get('albumDuration');
  albumTotalSongs: string = this.navParams.get('albumTotalSongs');
  albumGenre: string = this.navParams.get('albumGenre');
  albumUPCCode: string = this.navParams.get('albumUPCCode');
  albumId: string = this.navParams.get('$key');

  public editAlbumTitle: any;
  public editYearReleased: any;
  public editAlbumTotalSongs: any;
  public editAlbumDuration: any;
  public editAlbumUPCCode: any;
  public editAlbumGenre: any;

  public editSongTitle: any;

  songTitle: string = this.navParams.get('songTitle');

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase,
  public alertCtrl: AlertController) {

    this.songs = af.list('/songs')
    this.albums = af.list('/albums')
  }

  goToEditAlbumDetails() {
    this.navCtrl.push(EditBandsAlbumDetailsPage, {
      editAlbumTitle: this.albumTitle,
      editYearReleased: this.albumYearReleased,
      editAlbumTotalSongs: this.albumTotalSongs,
      editAlbumDuration: this.albumDuration,
      editAlbumUPCCode: this.albumUPCCode,
      editAlbumGenre: this.albumGenre
    });
  }

  goToEditSongsDetails() {
    this.navCtrl.push(EditBandsSongsDetailsPage, {
      editSongTitle: this.songTitle
    });
    alert(this.editSongTitle);
  }

  presentDeleteOption() {
    let confirm = this.alertCtrl.create({
      title: 'Delete Song?',
      message: 'Do you really want to delete this song? All associated data will be lost and is not retrievable after deletion.',
      buttons: [
        {
          text: 'Oops!',
          handler: () => {
            console.log('Oops! clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            console.log('Delete clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandsViewAlbumPage');
  }

  registerBandsSongsDetails = RegisterBandsSongsDetailsPage;
  //editBandsSongsDetails = EditBandsSongsDetailsPage;

}

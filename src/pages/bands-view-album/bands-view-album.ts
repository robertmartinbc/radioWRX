import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { RegisterBandsSongsDetailsPage } from '../register-bands-songs-details/register-bands-songs-details';
import { EditBandsSongsDetailsPage } from '../edit-bands-songs-details/edit-bands-songs-details';
import { EditBandsAlbumDetailsPage } from '../edit-bands-album-details/edit-bands-album-details';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire,
  public actionSheetCtrl: ActionSheetController) {

    this.songs = af.database.list('/songs')
    this.albums = af.database.list('/albums')
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandsViewAlbumPage');
  }

  registerBandsSongsDetails = RegisterBandsSongsDetailsPage;
  //editBandsSongsDetails = EditBandsSongsDetailsPage;

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify Song',
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            console.log('Edit clicked');
          }
        },{
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            console.log('Delete clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}

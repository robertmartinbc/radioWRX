import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewMyArtist } from './view-my-artist';

@NgModule({
  declarations: [
    ViewMyArtist,
  ],
  imports: [
    IonicPageModule.forChild(ViewMyArtist),
  ],
  exports: [
    ViewMyArtist
  ]
})
export class ViewMyArtistModule {}

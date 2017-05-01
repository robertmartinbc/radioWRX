import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewMyAlbum } from './view-my-album';

@NgModule({
  declarations: [
    ViewMyAlbum,
  ],
  imports: [
    IonicPageModule.forChild(ViewMyAlbum),
  ],
  exports: [
    ViewMyAlbum
  ]
})
export class ViewMyAlbumModule {}

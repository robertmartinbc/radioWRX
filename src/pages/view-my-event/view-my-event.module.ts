import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewMyEvent } from './view-my-event';

@NgModule({
  declarations: [
    ViewMyEvent,
  ],
  imports: [
    IonicPageModule.forChild(ViewMyEvent),
  ],
  exports: [
    ViewMyEvent
  ]
})
export class ViewMyEventModule {}

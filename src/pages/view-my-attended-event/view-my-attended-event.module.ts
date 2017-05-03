import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewMyAttendedEvent } from './view-my-attended-event';

@NgModule({
  declarations: [
    ViewMyAttendedEvent,
  ],
  imports: [
    IonicPageModule.forChild(ViewMyAttendedEvent),
  ],
  exports: [
    ViewMyAttendedEvent
  ]
})
export class ViewMyAttendedEventModule {}

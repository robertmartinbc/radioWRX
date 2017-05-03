import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewMyUpcomingEvent } from './view-my-upcoming-event';

@NgModule({
  declarations: [
    ViewMyUpcomingEvent,
  ],
  imports: [
    IonicPageModule.forChild(ViewMyUpcomingEvent),
  ],
  exports: [
    ViewMyUpcomingEvent
  ]
})
export class ViewMyUpcomingEventModule {}

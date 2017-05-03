import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewMyCanceledEvent } from './view-my-canceled-event';

@NgModule({
  declarations: [
    ViewMyCanceledEvent,
  ],
  imports: [
    IonicPageModule.forChild(ViewMyCanceledEvent),
  ],
  exports: [
    ViewMyCanceledEvent
  ]
})
export class ViewMyCanceledEventModule {}

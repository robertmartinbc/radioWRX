import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs'

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {
  albums: ReplaySubject<{}> = new ReplaySubject<{}>()
  constructor() {

  }
  get Albums() {
    return this.albums;
  }
  addAlbum(album) {
    this.albums.next(album);
  }
}

import { Component } from '@angular/core';

//import { HomePage } from '../home/home';
//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { RadioPage } from '../radio/radio';
import { TicketsPage } from '../tickets/tickets';
import { MusicPage } from '../music/music';
import { AccountPage } from '../account/account';
import { BandsViewBandsProfilePage } from '../bands-view-bands-profile/bands-view-bands-profile';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // Root
  tab1Root: any = BandsViewBandsProfilePage;
  tab2Root: any = TicketsPage;
  tab3Root: any = MusicPage;
  tab4Root: any = AccountPage;
  //tab5Root: any = BandsViewBandsProfilePage;
  isBand: boolean = false;

  userProfile: FirebaseListObservable<any>

  constructor(public af: AngularFire) {

    // TODO: Show RootPage for users and BandsViewBandsProfilePage to a Band user
    // FIXME: userProfile.kind is undefinned
    // firebase.auth().onAuthStateChanged(function(user) {
    //   if (user){
        // this.userProfile = af.database.object('/userProfile', {query: {orderByChild : "userId", equalTo: user.uid}})
        // this.userProfile = af.database.object('/userProfile/'+user.uid);
        // console.log(this.userProfile.kind);
        // this.userProfile = this.userProfile.first();
        // if (this.userProfile.kind === 'band')
        // if (true)
        //   this.isBand = true;
        // else
        //   this.isBand = false;

    //   }else{
    //     this.isBand = false;
    //   }
    // });

  }
}

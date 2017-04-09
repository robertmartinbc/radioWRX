import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { RadioPage } from '../radio/radio';
import { TicketsPage } from '../tickets/tickets';
import { MusicPage } from '../music/music';
import { AccountPage } from '../account/account';
import { BandsViewBandsProfilePage } from '../bands-view-bands-profile/bands-view-bands-profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = BandsViewBandsProfilePage;
  tab2Root: any = TicketsPage;
  tab3Root: any = MusicPage;
  tab4Root: any = AccountPage;

  constructor() {

  }
}

import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { TicketsPage } from '../tickets/tickets';
import { RadioPage } from '../radio/radio';
import { MusicPage } from '../music/music';
import { AccountPage } from '../account/account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TicketsPage;
  tab2Root: any = RadioPage;
  tab3Root: any = MusicPage;
  tab4Root: any = AccountPage;

  constructor() {

  }
}

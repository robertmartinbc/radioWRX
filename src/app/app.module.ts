import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TicketsPage } from '../pages/tickets/tickets';
import { RadioPage } from '../pages/radio/radio';
import { MusicPage } from '../pages/music/music';
import { AccountPage } from '../pages/account/account';
import { MyAlbumsPage } from '../pages/my-albums/my-albums';
import { MyArtistsPage } from '../pages/my-artists/my-artists';
import { MySongsPage } from '../pages/my-songs/my-songs';
import { MyPlaylistsPage } from '../pages/my-playlists/my-playlists';
import { MyBandsByFansPage } from '../pages/my-bands-by-fans/my-bands-by-fans';
import { MyCDFundsPage } from '../pages/my-cd-funds/my-cd-funds';
import { MyPortfolioPage } from '../pages/my-portfolio/my-portfolio';
import { MyPrivatePartyPage } from '../pages/my-private-party/my-private-party';
import { MyTicketsPage } from '../pages/my-tickets/my-tickets';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TicketsPage,
    RadioPage,
    MusicPage,
    AccountPage,
    MyAlbumsPage,
    MyArtistsPage,
    MySongsPage,
    MyPlaylistsPage,
    MyBandsByFansPage,
    MyCDFundsPage,
    MyPortfolioPage,
    MyPrivatePartyPage,
    MyTicketsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TicketsPage,
    RadioPage,
    MusicPage,
    AccountPage,
    MyAlbumsPage,
    MyArtistsPage,
    MySongsPage,
    MyPlaylistsPage,
    MyBandsByFansPage,
    MyCDFundsPage,
    MyPortfolioPage,
    MyPrivatePartyPage,
    MyTicketsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

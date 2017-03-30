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
import { FansViewBandsByFansPage } from '../pages/fans-view-bands-by-fans/fans-view-bands-by-fans';
import { FansViewBandsMembersPage } from '../pages/fans-view-bands-members/fans-view-bands-members';
import { FansViewBandsPortfolioPage } from '../pages/fans-view-bands-portfolio/fans-view-bands-portfolio';
import { FansViewBandsPrivatePartyPage } from '../pages/fans-view-bands-private-party/fans-view-bands-private-party';
import { FansViewBandsCDFundsPage } from '../pages/fans-view-bands-cd-funds/fans-view-bands-cd-funds';
import { FansViewBandsEventsPage } from '../pages/fans-view-bands-events/fans-view-bands-events';
import { ViewMyAttendedTicketsPage } from '../pages/view-my-attended-tickets/view-my-attended-tickets';
import { ViewMyCanceledTicketsPage } from '../pages/view-my-canceled-tickets/view-my-canceled-tickets';
import { ViewMyPastBandsByFansPage } from '../pages/view-my-past-bands-by-fans/view-my-past-bands-by-fans';
import { ViewMyPastCDFundsPage } from '../pages/view-my-past-cd-funds/view-my-past-cd-funds';
import { ViewMyPastPrivatePartyPage } from '../pages/view-my-past-private-party/view-my-past-private-party';
import { ViewMyPresentBandsByFansPage } from '../pages/view-my-present-bands-by-fans/view-my-present-bands-by-fans';
import { ViewMyPresentCDFundsPage } from '../pages/view-my-present-cd-funds/view-my-present-cd-funds';
import { ViewMyPresentPrivatePartyPage } from '../pages/view-my-present-private-party/view-my-present-private-party';
import { ViewMyUpcomingTicketsPage } from '../pages/view-my-upcoming-tickets/view-my-upcoming-tickets';
import { ViewAllTrendingArtistsPage } from '../pages/view-all-trending-artists/view-all-trending-artists';
import { ViewAllTrendingVideosPage } from '../pages/view-all-trending-videos/view-all-trending-videos';
import { ViewAllTrendingEventsPage } from '../pages/view-all-trending-events/view-all-trending-events';



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
    MyTicketsPage,
    FansViewBandsByFansPage,
    FansViewBandsMembersPage,
    FansViewBandsPortfolioPage,
    FansViewBandsPrivatePartyPage,
    FansViewBandsCDFundsPage,
    FansViewBandsEventsPage,
    ViewMyAttendedTicketsPage,
    ViewMyCanceledTicketsPage,
    ViewMyPastBandsByFansPage,
    ViewMyPastCDFundsPage,
    ViewMyPastPrivatePartyPage,
    ViewMyPresentBandsByFansPage,
    ViewMyPresentCDFundsPage,
    ViewMyPresentPrivatePartyPage,
    ViewMyUpcomingTicketsPage,
    ViewAllTrendingArtistsPage,
    ViewAllTrendingVideosPage,
    ViewAllTrendingEventsPage
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
    MyTicketsPage,
    FansViewBandsByFansPage,
    FansViewBandsMembersPage,
    FansViewBandsPortfolioPage,
    FansViewBandsPrivatePartyPage,
    FansViewBandsCDFundsPage,
    FansViewBandsEventsPage,
    ViewMyAttendedTicketsPage,
    ViewMyCanceledTicketsPage,
    ViewMyPastBandsByFansPage,
    ViewMyPastCDFundsPage,
    ViewMyPastPrivatePartyPage,
    ViewMyPresentBandsByFansPage,
    ViewMyPresentCDFundsPage,
    ViewMyPresentPrivatePartyPage,
    ViewMyUpcomingTicketsPage,
    ViewAllTrendingArtistsPage,
    ViewAllTrendingVideosPage,
    ViewAllTrendingEventsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

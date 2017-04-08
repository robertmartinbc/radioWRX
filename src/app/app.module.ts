import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Geolocation} from '@ionic-native/geolocation';
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
import { FansViewTicketsPage } from '../pages/fans-view-tickets/fans-view-tickets';
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
import { SignInModalPage } from '../pages/sign-in-modal/sign-in-modal';
import { FansSignInModalPage } from '../pages/fans-sign-in-modal/fans-sign-in-modal';
import { BandsSignInModalPage } from '../pages/bands-sign-in-modal/bands-sign-in-modal';
import { FansSignUpModalPage } from '../pages/fans-sign-up-modal/fans-sign-up-modal';
import { BandsSignUpModalPage } from '../pages/bands-sign-up-modal/bands-sign-up-modal';
import { BandsViewBandsProfilePage } from '../pages/bands-view-bands-profile/bands-view-bands-profile';
import { EditBandsAlbumDetailsPage } from '../pages/edit-bands-album-details/edit-bands-album-details';
import { EditBandsMembersDetailsPage } from '../pages/edit-bands-members-details/edit-bands-members-details';
import { EditBandsSongsDetailsPage } from '../pages/edit-bands-songs-details/edit-bands-songs-details';
import { LockedFeaturesModalPage } from '../pages/locked-features-modal/locked-features-modal';
import { RegisterBandsAlbumDetailsPage } from '../pages/register-bands-album-details/register-bands-album-details';
import { RegisterBandsMembersDetailsPage } from '../pages/register-bands-members-details/register-bands-members-details';
import { RegisterBandsSongsDetailsPage } from '../pages/register-bands-songs-details/register-bands-songs-details';
import { BandsViewBandsByFansPage } from '../pages/bands-view-bands-by-fans/bands-view-bands-by-fans';
import { BandsViewBandsCDFundsPage } from '../pages/bands-view-bands-cd-funds/bands-view-bands-cd-funds';
import { BandsViewBandsEventsPage } from '../pages/bands-view-bands-events/bands-view-bands-events';
import { BandsViewBandsMembersPage } from '../pages/bands-view-bands-members/bands-view-bands-members';
import { BandsViewBandsPrivatePartyPage } from '../pages/bands-view-bands-private-party/bands-view-bands-private-party';
import { RegisterBandsEventsDetailsPage } from '../pages/register-bands-events-details/register-bands-events-details';
import { RegisterBandsVideosDetailsPage } from '../pages/register-bands-videos-details/register-bands-videos-details';
import { EditBandsEventsDetailsPage } from '../pages/edit-bands-events-details/edit-bands-events-details';
import { EditBandsVideosDetailsPage } from '../pages/edit-bands-videos-details/edit-bands-videos-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'c8b30f66'
  }
};


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
    FansViewTicketsPage,
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
    ViewAllTrendingEventsPage,
    SignInModalPage,
    FansSignInModalPage,
    BandsSignInModalPage,
    FansSignUpModalPage,
    BandsSignUpModalPage,
    BandsViewBandsProfilePage,
    EditBandsAlbumDetailsPage,
    EditBandsMembersDetailsPage,
    EditBandsSongsDetailsPage,
    LockedFeaturesModalPage,
    RegisterBandsAlbumDetailsPage,
    RegisterBandsMembersDetailsPage,
    RegisterBandsSongsDetailsPage,
    BandsViewBandsByFansPage,
    BandsViewBandsCDFundsPage,
    BandsViewBandsEventsPage,
    BandsViewBandsMembersPage,
    BandsViewBandsPrivatePartyPage,
    RegisterBandsEventsDetailsPage,
    RegisterBandsVideosDetailsPage,
    EditBandsEventsDetailsPage,
    EditBandsVideosDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
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
    FansViewTicketsPage,
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
    ViewAllTrendingEventsPage,
    SignInModalPage,
    FansSignInModalPage,
    BandsSignInModalPage,
    FansSignUpModalPage,
    BandsSignUpModalPage,
    BandsViewBandsProfilePage,
    EditBandsAlbumDetailsPage,
    EditBandsMembersDetailsPage,
    EditBandsSongsDetailsPage,
    LockedFeaturesModalPage,
    RegisterBandsAlbumDetailsPage,
    RegisterBandsMembersDetailsPage,
    RegisterBandsSongsDetailsPage,
    BandsViewBandsByFansPage,
    BandsViewBandsCDFundsPage,
    BandsViewBandsEventsPage,
    BandsViewBandsMembersPage,
    BandsViewBandsPrivatePartyPage,
    RegisterBandsEventsDetailsPage,
    RegisterBandsVideosDetailsPage,
    EditBandsEventsDetailsPage,
    EditBandsVideosDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

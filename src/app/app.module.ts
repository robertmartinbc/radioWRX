import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Geolocation} from '@ionic-native/geolocation';
import { GoogleMaps} from '@ionic-native/google-maps';
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
import { FansViewBandsAlbumPage } from '../pages/fans-view-bands-album/fans-view-bands-album';
import { ViewMyAttendedTicketsPage } from '../pages/view-my-attended-tickets/view-my-attended-tickets';
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
import { RegisterCDFundsPackages } from '../pages/register-cd-funds-packages/register-cd-funds-packages';
import { BandsViewBandsByFansPage } from '../pages/bands-view-bands-by-fans/bands-view-bands-by-fans';
import { BandsViewBandsCDFundsPage } from '../pages/bands-view-bands-cd-funds/bands-view-bands-cd-funds';
import { BandsViewBandsEventsPage } from '../pages/bands-view-bands-events/bands-view-bands-events';
import { BandsViewBandsMembersPage } from '../pages/bands-view-bands-members/bands-view-bands-members';
import { BandsViewBandsPrivatePartyPage } from '../pages/bands-view-bands-private-party/bands-view-bands-private-party';
import { RegisterBandsEventsDetailsPage } from '../pages/register-bands-events-details/register-bands-events-details';
import { RegisterBandsVideosDetailsPage } from '../pages/register-bands-videos-details/register-bands-videos-details';
import { RegisterBandsByFansDetailsPage } from '../pages/register-bands-by-fans-details/register-bands-by-fans-details';
import { RegisterBandsCDFundsDetailsPage } from '../pages/register-bands-cd-funds-details/register-bands-cd-funds-details';
import { RegisterBandsPrivatePartyDetailsPage } from '../pages/register-bands-private-party-details/register-bands-private-party-details';
import { EditBandsEventsDetailsPage } from '../pages/edit-bands-events-details/edit-bands-events-details';
import { EditBandsVideosDetailsPage } from '../pages/edit-bands-videos-details/edit-bands-videos-details';
import { EditBandsByFansDetailsPage } from '../pages/edit-bands-by-fans-details/edit-bands-by-fans-details';
import { EditBandsCDFundsDetailsPage } from '../pages/edit-bands-cd-funds-details/edit-bands-cd-funds-details';
import { EditBandsPrivatePartyDetailsPage } from '../pages/edit-bands-private-party-details/edit-bands-private-party-details';
import { BandsViewAlbumPage } from '../pages/bands-view-album/bands-view-album';
import { ViewMyAlbum } from '../pages/view-my-album/view-my-album';
import { ViewMyArtist } from '../pages/view-my-artist/view-my-artist';
import { ViewMyUpcomingEvent } from '../pages/view-my-upcoming-event/view-my-upcoming-event';
import { ViewMyAttendedEvent } from '../pages/view-my-attended-event/view-my-attended-event';
import { ViewMyCanceledEvent } from '../pages/view-my-canceled-event/view-my-canceled-event';

import { Data } from '../providers/data';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { IonicAudioModule } from 'ionic-audio';
import { QRCodeModule } from 'angular2-qrcode'

import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../services/auth';
import { BrowserModule } from '@angular/platform-browser';

//import { AgmCoreModule } from 'angular2-google-maps/core';

// Initialize Firebase database for RadioWRX
const configRadioWRX = {
  apiKey: "AIzaSyCJ3HKc5Ti34FyORcTomcqVodN-TP58bOs",
  authDomain: "radiowrx-1490879559537.firebaseapp.com",
  databaseURL: "https://radiowrx-1490879559537.firebaseio.com",
  projectId: "radiowrx-1490879559537",
  storageBucket: "radiowrx-1490879559537.appspot.com",
  messagingSenderId: "626931278467"
};

/*
var configMobileWRX = {
    apiKey: "AIzaSyDCtLeyN5Iws9bxWJId-kkKkmr-4Jh5PqQ",
    authDomain: "mobilewrx-87fb9.firebaseapp.com",
    databaseURL: "https://mobilewrx-87fb9.firebaseio.com",
    projectId: "mobilewrx-87fb9",
    storageBucket: "mobilewrx-87fb9.appspot.com",
    messagingSenderId: "243282432155"
  };
*/
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
    FansViewBandsAlbumPage,
    ViewMyAttendedTicketsPage,
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
    EditBandsVideosDetailsPage,
    EditBandsByFansDetailsPage,
    EditBandsCDFundsDetailsPage,
    EditBandsPrivatePartyDetailsPage,
    BandsViewAlbumPage,
    RegisterBandsByFansDetailsPage,
    RegisterBandsCDFundsDetailsPage,
    RegisterBandsPrivatePartyDetailsPage,
    ViewMyAlbum,
    ViewMyArtist,
    ViewMyUpcomingEvent,
    ViewMyAttendedEvent,
    ViewMyCanceledEvent,
    RegisterCDFundsPackages

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    IonicAudioModule.forRoot(),
    QRCodeModule,
    AngularFireModule.initializeApp(configRadioWRX),
    //AngularFireModule.initializeApp(configMobileWRX),
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
    FansViewBandsAlbumPage,
    ViewMyAttendedTicketsPage,
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
    EditBandsVideosDetailsPage,
    EditBandsByFansDetailsPage,
    EditBandsCDFundsDetailsPage,
    EditBandsPrivatePartyDetailsPage,
    BandsViewAlbumPage,
    RegisterBandsByFansDetailsPage,
    RegisterBandsCDFundsDetailsPage,
    RegisterBandsPrivatePartyDetailsPage,
    ViewMyAlbum,
    ViewMyArtist,
    ViewMyUpcomingEvent,
    ViewMyAttendedEvent,
    ViewMyCanceledEvent,
    RegisterCDFundsPackages
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data,
    AuthService,
    GoogleMaps
  ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { EventPage } from '../pages/event/event';
import { ProfilePage } from '../pages/profile/profile';
import { SignupPage } from '../pages/signup/signup';
import { StorypostingPage } from '../pages/storyposting/storyposting';
import { ChatslistPage } from '../pages/chatslist/chatslist';
import { MembersPage } from '../pages/members/members';
import { RequestPage } from '../pages/request/request';
import { ImagessPage} from '../pages/imagess/imagess';
import { VideossPage } from '../pages/videoss/videoss';
import { FindfriendsPage } from '../pages/findfriends/findfriends';
import { BriddggeHomePage } from '../pages/briddggehome/briddggehome';
import { ImageshomePage } from '../pages/imageshome/imageshome';
import { VideoshomePage } from '../pages/videoshome/videoshome';
import { LivevideoshomePage } from '../pages/livevideoshome/livevideoshome';
import { AddeventspostPage,ImagepopverPage } from '../pages/addeventspost/addeventspost';
import { ViewfollowersPage } from '../pages/viewfollowers/viewfollowers';
import { CommentsPage } from '../pages/comments/comments';
import { LikestabPage } from '../pages/likestab/likestab';
import { CommenttabPage } from '../pages/commenttab/commenttab';
import { EventinnerPage } from '../pages/eventinner/eventinner';
import { AddeventinnerPage } from '../pages/addeventinner/addeventinner';
import { OtherprofilePage } from '../pages/otherprofile/otherprofile';
import { SettingsPage } from '../pages/settings/settings';
import { ImagessotherPage } from '../pages/imagessother/imagessother';
import { VideossotherPage } from '../pages/videossother/videossother';
import { EventpostPage } from '../pages/eventpost/eventpost';

import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { File } from '@ionic-native/file';
import { AngularFireAuth } from 'angularfire2/auth';
import { Calendar } from '@ionic-native/calendar';
import { OneSignal } from '@ionic-native/onesignal';
import { DatePicker } from '@ionic-native/date-picker';
import { IonicStorageModule } from '@ionic/storage';
import { Device } from '@ionic-native/device';
import { ImagePicker } from '@ionic-native/image-picker';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Network } from '@ionic-native/network';
import { Media, MediaObject } from '@ionic-native/media';

  var firebaseConfig = {
    apiKey: "AIzaSyDL7UI8zs31V4cPK-rQtyEdcG7TG7yNiyo",
    authDomain: "geofirebase-b42f3.firebaseapp.com",
    databaseURL: "https://geofirebase-b42f3.firebaseio.com",
    projectId: "geofirebase-b42f3",
    storageBucket: "geofirebase-b42f3.appspot.com",
    messagingSenderId: "595735101148"
  };
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    EventPage,
    SignupPage,
    MembersPage,
    RequestPage,
    ProfilePage,
    StorypostingPage,EventpostPage,
    ImagessPage,ImagessotherPage,AddeventinnerPage,
    VideossPage,SettingsPage,VideossotherPage,
    ChatslistPage,OtherprofilePage,
    FindfriendsPage,EventinnerPage,
    BriddggeHomePage,CommenttabPage,
    ImageshomePage,LikestabPage,
    VideoshomePage,CommentsPage,
    LivevideoshomePage,ViewfollowersPage,
    AddeventspostPage,ImagepopverPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    EventPage,
    SignupPage,
    MembersPage,
    RequestPage,
    ProfilePage,
    StorypostingPage,EventpostPage,
    ImagessPage,ImagessotherPage,AddeventinnerPage,
    VideossPage,SettingsPage,VideossotherPage,
    ChatslistPage,OtherprofilePage,
    FindfriendsPage,EventinnerPage,
    BriddggeHomePage,CommenttabPage,
    ImageshomePage,LikestabPage,
    VideoshomePage,CommentsPage,
    LivevideoshomePage,ViewfollowersPage,
    AddeventspostPage,ImagepopverPage
  ],
  providers: [
    StatusBar,Calendar,OneSignal,Device,ImagePicker,InAppBrowser,
    SplashScreen,File,MediaCapture,Camera,DatePicker,Network,Media,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
  ]
})
export class AppModule {}

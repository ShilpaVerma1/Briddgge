import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FindfriendsPage } from '../pages/findfriends/findfriends';
import { ChatslistPage } from '../pages/chatslist/chatslist';
import { LoginPage } from '../pages/login/login';
import { StorypostingPage } from '../pages/storyposting/storyposting';
import { OneSignal } from '@ionic-native/onesignal';
import { BriddggeHomePage } from '../pages/briddggehome/briddggehome';
import { AddeventspostPage } from '../pages/addeventspost/addeventspost';
import { ViewfollowersPage } from '../pages/viewfollowers/viewfollowers';
import { Storage } from '@ionic/storage';
import { EventinnerPage } from '../pages/eventinner/eventinner';
import { MembersPage } from '../pages/members/members';
import { RequestPage } from '../pages/request/request';
import { SettingsPage } from '../pages/settings/settings';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Component({
  templateUrl: 'app.html',
  providers:[OneSignal]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  usrid:any;
  rootPage: any = LoginPage;

profiledata=[];
  pages: Array<{title: string, component: any,icon: any,imgs:any }>;
  options:any;fireAuth:any;
  constructor(public http:Http,private storage: Storage,private oneSignal: OneSignal,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
     
    this.initializeApp();
             document.addEventListener("pause", () => {

            }, false);

            document.addEventListener("resume", () => {

            }, false);

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: BriddggeHomePage,icon:"ios-arrow-forward",imgs:'http://2.mediaoncloud.com/Shilpa/Briddgge/home.png' },
      { title: 'Chat', component: ChatslistPage,icon:"ios-arrow-forward",imgs:'http://2.mediaoncloud.com/Shilpa/Briddgge/chat.png'  },
      { title: 'Events', component: EventinnerPage,icon:"ios-arrow-forward",imgs:'http://2.mediaoncloud.com/Shilpa/Briddgge/events.png'  },
      { title: 'Add new Activities', component: AddeventspostPage,icon:"ios-arrow-forward",imgs:'http://2.mediaoncloud.com/Shilpa/Briddgge/activities.png'  },
      { title: 'Settings', component: SettingsPage ,icon:"ios-arrow-forward",imgs:'http://2.mediaoncloud.com/Shilpa/Briddgge/setting.png' },
      { title: 'Members', component: MembersPage,icon:"ios-arrow-forward",imgs:'http://2.mediaoncloud.com/Shilpa/Briddgge/members.png'  },
      { title: 'Request', component: RequestPage,icon:"ios-arrow-forward",imgs:'http://2.mediaoncloud.com/Shilpa/Briddgge/request.png'  },
      { title: 'Find friends', component: FindfriendsPage,icon:"ios-arrow-forward",imgs:'http://2.mediaoncloud.com/Shilpa/Briddgge/request.png'  },
      { title: 'Logout', component: LoginPage,icon:"ios-arrow-forward",imgs:'http://2.mediaoncloud.com/Shilpa/Briddgge/logout.png' },

    ];
  this.storage.get('usrid').then((usrid) => {
          this.usrid = usrid;
          if(!this.usrid){
              this.rootPage = LoginPage ;
          }
          else if(this.usrid) {
              this.rootPage = BriddggeHomePage;
          }
    });
    //Observable.interval(1000 * 60).subscribe(x => {

      this.storage.get('usrid').then((usrid)=>{
        this.http.get("http://kanchan.mediaoncloud.com/briddgge/getProfile?user_id="+usrid).map(res => res.json()).subscribe(data => {
          this.profiledata=data;
        })
      })
    //})
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initnoti();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
   }
  initnoti(){
    this.oneSignal.startInit('1be56a71-d635-41cd-9eba-1d640a6b3f39', '595735101148');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(() => {
    // do something when notification is received
    });
    this.oneSignal.getIds().then((dviceid)=>{
       //   alert(dviceid.userId);      
       //   alert(dviceid.pushToken);
    })
    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });

    this.oneSignal.endInit();
  }
logout(){
  this.nav.push(LoginPage);
}
}

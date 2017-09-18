import { Component } from '@angular/core';
import { NavController,Platform, NavParams,MenuController } from 'ionic-angular';
import { VideossPage } from '../videoss/videoss';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { ImagessPage} from '../imagess/imagess';
import { BriddggeHomePage } from '../briddggehome/briddggehome';

declare var window;
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  tab1Root = VideossPage;
  tab2Root = ImagessPage;
  userid:any;
  profiledata:any=[];
  apiurl:any;

constructor(public platform:Platform,public menu:MenuController,private storage: Storage,public http:Http,public navCtrl: NavController, public navParams: NavParams) {
this.apiurl='http://briiddge.com/';

this.storage.get('usrid').then((usrid)=>{
  this.userid=usrid;
    this.http.get(this.apiurl+"getProfile?user_id="+usrid).map(res => res.json()).subscribe(data => {
      if(data.status!='failed' || data.status!='Failed'){
         this.profiledata=data;
      }else{
         this.platform.ready().then(() => {
               window.plugins.toast.show("Something went wrong", "long", "center");
          }) 
      }
    })
  })
}
home(){
  this.navCtrl.push(BriddggeHomePage);
}
profile(){
  
}
ionViewDidEnter() {
    //to disable menu, or
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // to enable menu.
    this.menu.enable(true);
  }
}

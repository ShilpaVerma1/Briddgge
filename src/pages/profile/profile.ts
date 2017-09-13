import { Component } from '@angular/core';
import { NavController, NavParams,MenuController } from 'ionic-angular';
import { VideossPage } from '../videoss/videoss';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { ImagessPage} from '../imagess/imagess';
import { BriddggeHomePage } from '../briddggehome/briddggehome';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  tab1Root = VideossPage;
  tab2Root = ImagessPage;
  userid:any;
  profiledata:any=[];
constructor(public menu:MenuController,private storage: Storage,public http:Http,public navCtrl: NavController, public navParams: NavParams) {
this.storage.get('usrid').then((usrid)=>{
  this.userid=usrid;
    this.http.get("http://kanchan.mediaoncloud.com/briddgge/getProfile?user_id="+usrid).map(res => res.json()).subscribe(data => {
      this.profiledata=data;
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

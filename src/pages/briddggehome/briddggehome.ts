import { Component,Injectable } from '@angular/core';
import { NavController, Platform,MenuController, NavParams} from 'ionic-angular';

import { ImageshomePage } from '../imageshome/imageshome';
import { VideoshomePage } from '../videoshome/videoshome';
import { LivevideoshomePage } from '../livevideoshome/livevideoshome';
import { ProfilePage } from '../profile/profile';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { AddeventspostPage } from '../addeventspost/addeventspost';
import { CommentsPage } from '../comments/comments';

declare var window: any;
@Component({
  selector: 'page-briddggehome',
  templateUrl: 'briddggehome.html',

})
export class BriddggeHomePage {
  uid:any;
  tab1Root = ImageshomePage;
  tab2Root = VideoshomePage;
  tab3Root = LivevideoshomePage;
  imgcount:any;videocount:any
  stories=[];profiledata=[];
constructor(public http:Http,private storage: Storage,public navCtrl: NavController, public menu:MenuController,  public platform:Platform, private navParams:NavParams) {
  //this.uid=this.navParams.get('userid');
 this.storage.get('usrid').then((usrid)=>{
  this.http.get("http://kanchan.mediaoncloud.com/briddgge/recentPostUsers?user_id="+usrid).map(res => res.json()).subscribe(data => {
    this.stories=data;
    this.imgcount=this.stories[0].imgCount;
    this.videocount=this.stories[0].vidCount;
   })

   this.http.get("http://kanchan.mediaoncloud.com/briddgge/getProfile?user_id="+usrid).map(res => res.json()).subscribe(data => {
      this.profiledata=data;
    })
})
}
profile(){
  this.navCtrl.push(ProfilePage);
}
home(){
  
}
openstory(postid){
  this.navCtrl.push(CommentsPage,{
    postid:postid
  });
}
addstory(){
  this.navCtrl.push(AddeventspostPage);

}
}

import { Component } from '@angular/core';
import { NavController,App, NavParams,PopoverController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { CommentsPage } from '../comments/comments';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-imagess',
  templateUrl: 'imagess.html',
})
export class ImagessPage {
status:any=[];
uid:any;
options : InAppBrowserOptions = {
    location : 'yes',
    toolbar:'no'
  }
apiurl:any;

constructor(private iab: InAppBrowser,public app:App,private storage: Storage,public http:Http,public navCtrl: NavController,public popoverCtrl: PopoverController, public navParams: NavParams) {
 this.apiurl='http://kanchan.mediaoncloud.com/briddgge/';

 this.storage.get('usrid').then((usrid)=>{
        this.http.get(this.apiurl+"fetchStatus?user_id="+usrid).map(res => res.json()).subscribe(data => {
           this.status=data;
       })
  })

}
 openpost(id,img){
  // this.app.getRootNav().push(CommentsPage,{
  //   postid:id
  // });
 let target = "_blank";
 this.iab.create(img,target,this.options);

 }
}

import { Component } from '@angular/core';
import { NavController,App, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { CommentsPage } from '../comments/comments';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-imagessother',
  templateUrl: 'imagessother.html',
})
export class ImagessotherPage {
status:any=[];
options : InAppBrowserOptions = {
    location : 'yes',
    toolbar:'no'
  }
apiurl:any;

constructor(private iab: InAppBrowser,public app:App,private storage: Storage,public http:Http,public navCtrl: NavController, public navParams: NavParams) {
var usrid=navParams.data;
this.apiurl='http://kanchan.mediaoncloud.com/briddgge/';

 this.http.get(this.apiurl+"fetchStatus?user_id="+usrid).map(res => res.json()).subscribe(data => {
           this.status=data;
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

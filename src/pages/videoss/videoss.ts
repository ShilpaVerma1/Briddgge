import { Component } from '@angular/core';
import { NavController,App, NavParams,PopoverController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { CommentsPage } from '../comments/comments';


@Component({
  selector: 'page-videoss',
  templateUrl: 'videoss.html',
})
export class VideossPage {
status:any=[];
  constructor(public app:App,private storage: Storage,public http:Http,public popoverCtrl: PopoverController,public navCtrl: NavController, public navParams: NavParams) {
  // var usrid=navParams.data;
    this.storage.get('usrid').then((usrid)=>{
            this.http.get("http://briiddge.com/fetchStatus?user_id="+usrid).map(res => res.json()).subscribe(data => {
              this.status=data;
          })
    })
 }
 openpost(id){
  this.app.getRootNav().push(CommentsPage,{
    postid:id
  });
 }
}


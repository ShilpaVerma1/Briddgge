import { Component } from '@angular/core';
import { NavController,App, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { CommentsPage } from '../comments/comments';

@Component({
  selector: 'page-videossother',
  templateUrl: 'videossother.html',
})
export class VideossotherPage {
status:any=[]

constructor(public app:App,private storage: Storage,public http:Http,public navCtrl: NavController, public navParams: NavParams) {
var usrid=navParams.data;
 this.http.get("http://briiddge.com/fetchStatus?user_id="+usrid).map(res => res.json()).subscribe(data => {
           this.status=data;
 })
}
 openpost(id){
  this.app.getRootNav().push(CommentsPage,{
    postid:id
  });
 }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BriddggeHomePage } from '../briddggehome/briddggehome';
import { LikestabPage } from '../likestab/likestab';
import { CommenttabPage } from '../commenttab/commenttab';
import { Http } from '@angular/http';
import * as firebase from 'firebase';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule, FirebaseListObservable, AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {
tab1Root=LikestabPage;
tab2Root=CommenttabPage;
postid:any;
postimg:any;
postmsg:any;
postusrname:any;
commentcount:any;
profilepic:any;
likecount:any;
postvideo:any;
db:any;
afstatus:Array <FirebaseListObservable<any>>;
constructor(db: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  this.db=db;
  this.postid=this.navParams.get('postid');
  this.postimg=this.navParams.get('postimg');
  this.postmsg=this.navParams.get('postmsg');
  this.postusrname=this.navParams.get('postusrname');
  this.profilepic=this.navParams.get('profilepic');
  this.postvideo=this.navParams.get('postvideo')
  
    // this.http.get("http://kanchan.mediaoncloud.com/briddgge/fetchStatusInner?post_id="+this.postid).map(res => res.json()).subscribe(data => {
    //   this.commentcount=data.countComment;
    //   this.likecount=data.likes;
    // })
    var refNew = this.db.list('/Count/'+this.postid);
        refNew.subscribe((data)=>{
        this.afstatus=data;
   })
}

  back(){
    this.navCtrl.push(BriddggeHomePage);
  }

}

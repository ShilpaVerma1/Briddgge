import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BriddggeHomePage } from '../briddggehome/briddggehome';
import { LikestabPage } from '../likestab/likestab';
import { CommenttabPage } from '../commenttab/commenttab';
import { Http } from '@angular/http';
import * as firebase from 'firebase';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule, FirebaseListObservable, AngularFireDatabase} from 'angularfire2/database';
import { Storage } from '@ionic/storage';

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
commentdata=[];
apiurl:any;
video:any;
afstatus:Array <FirebaseListObservable<any>>;
status:any;
vol:any;
constructor(private storage: Storage,db: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  this.db=db;
  this.apiurl='http://briiddge.com/';
  this.status="playimg";
    this.vol="mute";
  // this.postimg=this.navParams.get('postimg');
  // this.postmsg=this.navParams.get('postmsg');
  // this.postusrname=this.navParams.get('postusrname');
  // this.profilepic=this.navParams.get('profilepic');
  // this.postvideo=this.navParams.get('postvideo');
  this.postid=this.navParams.get('postid');

   this.storage.get('usrid').then((usrid)=>{
      this.http.get(this.apiurl+"fetchStatusInner?post_id="+this.postid+"&user_id="+usrid).map(res => res.json()).subscribe(data => {
        this.commentdata=data;

      })
   })
    var refNew = this.db.list('/Count/'+this.postid);
        refNew.subscribe((data)=>{
        this.afstatus=data;
   })
}
share(){
 
}
volume(){
   this.video=document.getElementById('video1');

   if (!this.video.muted) {
        this.video.muted = true;
        this.vol='mute';

    } else {
        this.video.muted = false;
        this.vol='unmute';

    }
}
rewind(){
  this.video=document.getElementById('video1');
  this.video.currentTime-=10; 
}

forward(){
  this.video=document.getElementById('video1');
  this.video.currentTime+=10; 
}

  play(){
    
    this.video=document.getElementById('video1');
    if(this.video.paused===false){
        this.status='playimg';
        this.video.pause();
      }
      else{
           this.status='pauseimg';
          this.video.play();        
      }
  }
  back(){
    this.navCtrl.push(BriddggeHomePage);
  }

}

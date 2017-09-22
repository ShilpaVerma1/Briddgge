import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventinnerPage } from '../eventinner/eventinner';
import { LikestabPage } from '../likestab/likestab';
import { CommenttabPage } from '../commenttab/commenttab';
import { Http } from '@angular/http';
import * as firebase from 'firebase';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule, FirebaseListObservable, AngularFireDatabase} from 'angularfire2/database';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-eventpost',
  templateUrl: 'eventpost.html',
})
export class EventpostPage {
tab1Root=LikestabPage;
tab2Root=CommenttabPage;
postid:any;apiurl:any;
commentdata=[];
db:any;
status:any;
vol:any;
video:any;
evstatus:Array <FirebaseListObservable<any>>;

constructor(db:AngularFireDatabase,public http:Http,public storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
  this.apiurl='http://briiddge.com/';
  this.db=db;
  this.status="playimg";
  this.vol="mute";
  /****************Eventstories*****************/
 this.postid=this.navParams.get('postid');
 this.storage.get('usrid').then((usrid)=>{
    this.http.get(this.apiurl+"fetchEventInner?evt_id="+this.postid+"&user_id="+usrid).map(res => res.json()).subscribe(data => {
      this.commentdata=data;
     
    })
 })
    var refNew = this.db.list('/EventCount/'+this.postid);
        refNew.subscribe((data)=>{   
        this.evstatus=data;
   })
}
back(){
  this.navCtrl.push(EventinnerPage);
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
}

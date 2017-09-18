import { Component } from '@angular/core';
import { NavController, NavParams,App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { CommentsPage } from '../comments/comments';
import * as firebase from 'firebase';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule, FirebaseListObservable, AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'page-videoshome',
  templateUrl: 'videoshome.html',
})
export class VideoshomePage {
status:any=[];video:any;
test:any;
db:any;
afstatus:Array <FirebaseListObservable<any>>;
  constructor(db: AngularFireDatabase,private app: App,private storage: Storage,public http:Http,public navCtrl: NavController, public navParams: NavParams) {
  this.test='playimg';
  this.db=db;
  
  this.storage.get('usrid').then((usrid)=>{
    this.http.get("http://briiddge.com/fetchStatusAll?user_id="+usrid).map(res => res.json()).subscribe(data => {
            this.status=data;
    })
  })
        var refNew = this.db.list('/Count/', { query: {
           orderByChild:'key'
        }}).map((array) => array.reverse()) as FirebaseListObservable<any[]>;
        refNew.subscribe((data)=>{
          var rawList=[];
          this.afstatus = [];    
          data.forEach(minispanshot =>{ 
          var refVal = minispanshot.$key;
          var refNew = this.db.list('/Count/'+refVal);
           refNew.subscribe((dataInner)=>{ 
             let newData = dataInner[0];
              rawList[refVal] = newData;
              this.afstatus = rawList;
           })
         })
        })
}
  play(pid,index){
    
    this.video=document.getElementById(pid);
    if(this.video.paused===false){
        this.test='playimg';
        this.video.pause();
         // btn.textContent= ">";

      }
      else{
          this.test='pauseimg';
          this.video.play();
       // btn.textContent= "||";
        
      }
  }
like(afcount,afkey,index,pid){
  var newcount=JSON.parse(afcount)+1;
  this.status[index].likeStatus=true;
    this.storage.get('usrid').then((usrid)=>{
        this.http.get("http://kanchan.mediaoncloud.com/briddgge/likeStatus?user_id="+usrid+"&post_id="+pid+"&likeStatus=1").map(res => res.json()).subscribe(data => {
        })
    })
    var ref=this.db.list('/Count/'+pid);
    ref.update(afkey,{
      Likecount:newcount,
     // likedislikevar:1
    })
}
unlike(afcount,afkey,index,pid){
  var newcount=JSON.parse(afcount)-1;
  this.status[index].likeStatus=false;
    this.storage.get('usrid').then((usrid)=>{
        this.http.get("http://kanchan.mediaoncloud.com/briddgge/likeStatus?user_id="+usrid+"&post_id="+pid+"&likeStatus=0").map(res => res.json()).subscribe(data => {
        })
    })
    var ref=this.db.list('/Count/'+pid);
    ref.update(afkey,{
      Likecount:newcount,
     // likedislikevar:0
    })
}
Comments(postid,postvideo,postmsg,usrname,profileimg){
  this.app.getRootNav().push(CommentsPage,{
    postid:postid,
    postvideo:postvideo,
    postmsg:postmsg,
    postusrname:usrname,
    profilepic:profileimg,
  }); 
}
}

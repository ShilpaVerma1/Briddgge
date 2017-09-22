import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { EventpostPage } from '../eventpost/eventpost';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule,FirebaseListObservable, AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';
import { Http } from '@angular/http';

@Component({
  selector: 'page-eventinner',
  templateUrl: 'eventinner.html',
})
export class EventinnerPage {
apiurl:any;
eventstatus:any=[];
photos:any=[];
video:any;
test:any=[];
db:any;
afstatus:Array <FirebaseListObservable<any>>;

constructor(db: AngularFireDatabase,public http:Http,private storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
 this.apiurl='http://briiddge.com/';
 this.db=db;
 this.storage.get('usrid').then((usrid)=>{
    // this.http.get(this.apiurl+"fetchEvents?user_id="+usrid).map(res => res.json()).subscribe(data => {
    //   this.eventstatus=data;
  
    // })
    this.http.get(this.apiurl+"fetchEventsAll?user_id="+usrid).map(res => res.json()).subscribe(data => {
      if(data.status!='Failed'){
        this.eventstatus=data;
          for(let i = 0; i < this.eventstatus.length; i++){
              this.test.push({statuss:'playimg',vol:'unmute'});
            }
      }else{
        alert('Records not found');
      } 
    })
 })

/************Like post ***********/
  var refNew = this.db.list('/EventCount/', { query: {
           orderByChild:'key'
        }}).map((array) => array.reverse()) as FirebaseListObservable<any[]>;
        refNew.subscribe((data)=>{
          var rawList=[];
          this.afstatus = [];    
          data.forEach(minispanshot =>{ 
          var refVal = minispanshot.$key;
          var refNew = this.db.list('/EventCount/'+refVal);
           refNew.subscribe((dataInner)=>{ 
             let newData = dataInner[0];
              rawList[refVal] = newData;
              this.afstatus = rawList;
           })
         })
        })

}
comments(eventid,description){
  this.storage.set('storyevent','events');

  this.navCtrl.push(EventpostPage,{
     postid:eventid,
     desc:description
  });
}
volume(pid,index){
   this.video=document.getElementById(pid);

   if (!this.video.muted) {
        this.video.muted = true;
        this.test[index].vol='mute';
    } else {
        this.video.muted = false;
        this.test[index].vol='unmute';
    }
}
rewind(pid){
  this.video=document.getElementById(pid);
  this.video.currentTime-=10; 
}

forward(pid){
  this.video=document.getElementById(pid);
  this.video.currentTime+=10; 
}

  play(pid,index){
    
    this.video=document.getElementById(pid);
    if(this.video.paused===false){
        this.test[index].statuss='playimg';
        this.video.pause();
      }
      else{
           this.test[index].statuss='pauseimg';
          this.video.play();        
      }
  }
like(afcount,afkey,index,pid){

   var newcount=JSON.parse(afcount)+1;
   this.eventstatus[index].likeStatus=true;
    this.storage.get('usrid').then((usrid)=>{
        this.http.get(this.apiurl+"likeEvent?user_id="+usrid+"&event_id="+pid+"&likeStatus=1").map(res => res.json()).subscribe(data => {
        })
    })
    var ref=this.db.list('/EventCount/'+pid);
    ref.update(afkey,{
      Likecount:newcount,
    })
}
unlike(afcount,afkey,index,pid){

   var newcount=JSON.parse(afcount)-1;
   this.eventstatus[index].likeStatus=false;
    this.storage.get('usrid').then((usrid)=>{
        this.http.get(this.apiurl+"likeEvent?user_id="+usrid+"&event_id="+pid+"&likeStatus=0").map(res => res.json()).subscribe(data => {
        })
    })
    var ref=this.db.list('/EventCount/'+pid);
    ref.update(afkey,{
      Likecount:newcount,
    })
}
}

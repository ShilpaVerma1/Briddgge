import { Component } from '@angular/core';
import { NavController, NavParams,Platform} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import * as firebase from 'firebase';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule, FirebaseListObservable, AngularFireDatabase} from 'angularfire2/database';

declare var window:any;
@Component({
  selector: 'page-commenttab',
  templateUrl: 'commenttab.html',
})
export class CommenttabPage {
commenttext:any;
statusid:any;
commentdata=[];
likes:any;
count:number;
db:any;counts:any;
commentstatus:Array <FirebaseListObservable<any>>;
afstatus:Array <FirebaseListObservable<any>>;
afstatus1:Array <FirebaseListObservable<any>>;
constructor(public platform:Platform,db: AngularFireDatabase,public http:Http,private storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
    this.statusid= navParams.data;
    this.db=db;
 this.storage.get('usrid').then((usrid)=>{
    this.http.get("http://kanchan.mediaoncloud.com/briddgge/fetchStatusInner?post_id="+this.statusid+"&user_id="+usrid).map(res => res.json()).subscribe(data => {
      this.commentdata=data.comment;
    })
 })
    var refNew = this.db.list('/Count/'+this.statusid);
        refNew.subscribe((data)=>{   
        this.afstatus=data;
   })
 
    var ref = this.db.list('/Commentlikes/', { query: {
           orderByChild:'key'
        }}).map((array) => array.reverse()) as FirebaseListObservable<any[]>;
        ref.subscribe((data)=>{
          var rawlist=[];
          this.afstatus1 = [];    
          data.forEach(minispanshot =>{ 
          var refval = minispanshot.$key;
          var refNew = this.db.list('/Commentlikes/'+refval);
           refNew.subscribe((dataInner)=>{ 
             let newData = dataInner[0];
              rawlist[refval] = newData;
              this.afstatus1 = rawlist;
           })
         })
        })
}
send(afcount,afkey){

  this.storage.get('usrid').then((usrid)=>{
        this.http.get("http://kanchan.mediaoncloud.com/briddgge/saveComment?user_id="+usrid+"&post_id="+this.statusid+"&comment="+this.commenttext).map(res => res.json()).subscribe(data => {
            if(data.status=='Success'){
            var newcommentcount=JSON.parse(afcount)+1;
                var ref=this.db.list('/Count/'+ this.statusid);
                ref.update(afkey,{
                Commentcount:newcommentcount
            })
            var commentid=data.id;
            this.counts = this.db.list('/Commentlikes/'+commentid); 
            this.counts.push({ 
                Likes:0,
            });
                this.platform.ready().then(() => {
                    window.plugins.toast.show("Comments posted", "short", "center");
                })
                this.commenttext='';
               this.storage.get('usrid').then((usrid)=>{
                    this.http.get("http://kanchan.mediaoncloud.com/briddgge/fetchStatusInner?post_id="+this.statusid+"&user_id="+usrid).map(res => res.json()).subscribe(data => {
                    this.commentdata=data.comment;
                    })
                })
            }else{             
                this.platform.ready().then(() => {
                    window.plugins.toast.show("Write your comment in commentbox", "short", "center");
                })
            }
        }) 
  })
}
like(afcount,afkey,index,pid){
   var newcount=JSON.parse(afcount)+1;
   this.commentdata[index].likeStatus=true;
    this.storage.get('usrid').then((usrid)=>{
        this.http.get("http://kanchan.mediaoncloud.com/briddgge/likeComment?user_id="+usrid+"&comment_id="+pid+"&likesComment=1").map(res => res.json()).subscribe(data => {
        })
    })
    var ref=this.db.list('/Commentlikes/'+pid);
    ref.update(afkey,{
      Likes:newcount,
    })
}
unlike(afcount,afkey,index,pid){

    var newcount=JSON.parse(afcount)-1;
    this.commentdata[index].likeStatus=false;
    this.storage.get('usrid').then((usrid)=>{
        this.http.get("http://kanchan.mediaoncloud.com/briddgge/likeComment?user_id="+usrid+"&comment_id="+pid+"&likesComment=0").map(res => res.json()).subscribe(data => {
        })
    })
    var ref=this.db.list('/Commentlikes/'+pid);
    ref.update(afkey,{
      Likes:newcount,
    })
}
}

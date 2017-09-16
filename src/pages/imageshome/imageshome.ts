import { Component } from '@angular/core';
import { NavController, NavParams,App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { CommentsPage } from '../comments/comments';
import * as firebase from 'firebase';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule, FirebaseListObservable, AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'page-imageshome',
  templateUrl: 'imageshome.html',
})
export class ImageshomePage {
status:any=[];
db:any;
afstatus:Array <FirebaseListObservable<any>>;
apiurl:any;

constructor(private app: App,db: AngularFireDatabase,private storage: Storage,public http:Http,public navCtrl: NavController, public navParams: NavParams) {
 this.db=db;
 this.apiurl='http://kanchan.mediaoncloud.com/briddgge/';
 this.storage.get('usrid').then((usrid)=>{
 this.http.get("http://kanchan.mediaoncloud.com/briddgge/fetchStatusAll?user_id="+usrid).map(res => res.json()).subscribe(data => {
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
Comments(postid,postimg,postmsg,usrname,profileimg){
  this.app.getRootNav().push(CommentsPage,{
    postid:postid,
    postimg:postimg,
    postmsg:postmsg,
    postusrname:usrname,
    profilepic:profileimg
  }); 
}
like(afcount,afkey,index,pid){

   var newcount=JSON.parse(afcount)+1;
   this.status[index].likeStatus=true;
    this.storage.get('usrid').then((usrid)=>{
        this.http.get(this.apiurl+"likeStatus?user_id="+usrid+"&post_id="+pid+"&likeStatus=1").map(res => res.json()).subscribe(data => {
        })
    })
    var ref=this.db.list('/Count/'+pid);
    ref.update(afkey,{
      Likecount:newcount,
    //  likedislikevar:1
    })
}
unlike(afcount,afkey,index,pid){

   var newcount=JSON.parse(afcount)-1;
   this.status[index].likeStatus=false;
    this.storage.get('usrid').then((usrid)=>{
        this.http.get(this.apiurl+"likeStatus?user_id="+usrid+"&post_id="+pid+"&likeStatus=0").map(res => res.json()).subscribe(data => {
        })
    })
    var ref=this.db.list('/Count/'+pid);
    ref.update(afkey,{
      Likecount:newcount,
    })
}
likepost(postid,postimg,postmsg,usrname,profileimg){
    this.app.getRootNav().push(CommentsPage,{
    postid:postid,
    postimg:postimg,
    postmsg:postmsg,
    postusrname:usrname,
    profilepic:profileimg,
    })
}
}

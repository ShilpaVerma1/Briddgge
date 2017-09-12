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
likes:any;cmtdata=[];
count:number;
db:any;counts:any;
commentstatus:any;
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
 
    // var ref = this.db.list('/Commentlikes/', { query: {
    //        orderByChild:'key'
    //     }}).map((array) => array.reverse()) as FirebaseListObservable<any[]>;
    //     ref.subscribe((data)=>{
    //       var rawlist=[];
    //       this.afstatus1 = [];    
    //       data.forEach(minispanshot =>{ 
    //       var refval = minispanshot.$key;
    //       var refNew = this.db.list('/Commentlikes/'+refval);
    //        refNew.subscribe((dataInner)=>{ 
    //          let newData = dataInner[0];
    //           rawlist[refval] = newData;
    //           this.afstatus1 = rawlist;
    //        })
    //      })
    //     })
    var ref = this.db.list('/Commentss/');
    ref.subscribe((data)=>{  
        this.afstatus1=[];
       data.forEach(snapshot=>{
           var keys=snapshot.$key;
           if(keys==this.statusid){
             var reff=this.db.list('/Commentss/'+keys+'/Comments/')
                 reff.subscribe((keydata)=>{
                     keydata.forEach(data=>{
                        this.afstatus1.push(data);
                        //   var refff=this.db.list('/Commentss/')
                        //   refff.subscribe((commnttext)=>{
                        //       commnttext.forEach((text)=>{
                        //           this.afstatus1.push(text);
                        //        console.log(this.afstatus1)
                        //     }) 
                        // })
                     })
                })
           }
       })
    })

}

senddd(afcount,afkey){
    if(this.commenttext==undefined){
        this.platform.ready().then(() => {
            window.plugins.toast.show("Write your comment", "long", "center");
        })

    }else{
        this.storage.get('usrid').then((usrid)=>{

            this.http.get("http://kanchan.mediaoncloud.com/briddgge/getProfile?user_id="+usrid).map(res => res.json()).subscribe(data => {
            this.counts = this.db.list('/Commentss/'+this.statusid+'/Comments/');
               /****Push comments ****/
                this.counts.push({ 
                    loginuserid:usrid,
                    comment:this.commenttext,
                    createdAt : firebase.database.ServerValue.TIMESTAMP,
                    Likes:0,
                    profile_img:data.img,
                    name:data.name,
                    user_ids:''
                });
                /****Increase comment count in count node ****/
                var newcommentcount=JSON.parse(afcount)+1;
                var ref=this.db.list('/Count/'+ this.statusid);
                ref.update(afkey,{
                     Commentcount:newcommentcount,
                })
            })
        })
    }
}

like(key,likecount,usrids){

  this.storage.get('usrid').then((usrid)=>{
    var split_str = usrids.split(",");
    /******Like  comments******/
    if(split_str.includes(usrid)==false){
        let userids=usrids+','+usrid
         var newcount=JSON.parse(likecount)+1;
         this.commentstatus='commentliked'
            var ref=this.db.list('/Commentss/'+this.statusid+'/Comments/');
                ref.update(key,{
                    Likes:newcount,
                    user_ids:userids
            }) 
    }
    /******Unlike  comments******/
    else{
          var remove_index=split_str.indexOf(usrid);
          split_str.splice(remove_index,1);
           var userids=split_str.join(",");
           var count=JSON.parse(likecount)-1;
            this.commentstatus='commentunliked'
            var ref=this.db.list('/Commentss/'+this.statusid+'/Comments/');
                ref.update(key,{
                    Likes:count,
                    user_ids:userids
            }) 
    }
 })
}
/*send(afcount,afkey){

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


unlike(key,likecount,usrids){

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

timeSince(myDate) {
     //   var myDate=text.createdAt;
                                //    this.newdate=this.timeSince(myDate);
                                //    this.cmtdata.push({
                                //        img:text.profile_img,
                                //        time:this.newdate,
                                //        comment:text.comment,
                                //        like:text.Likes,
                                //        name:text.name
                                //    });
   var now = new Date();
    var d = Math.abs(now.getTime() - myDate) / 1000;
    var seconds    = d ;
    var minutes    = Math.round(d / 60 );
    var hours      = Math.round(d / 3600);
    var days       = Math.round(d / 86400 );
    var weeks      = Math.round(d / 604800);
    var months     = Math.round(d / 2600640 );
    var years      = Math.round(d / 31207680 );

    if(seconds <= 60){
        return "Just now";
    }

    else if(minutes <=60){
        if(minutes==1){
          return "a minute ago";
        }
        else{
           return  minutes+''+"minutes ago";
        }
    }

    else if(hours <=24){
        if(hours==1){
           return  "an hour ago";
        }else{
            return hours+''+"hrs ago";
        }
    }

    else if(days <= 7){
        if(days==1){
            return "Yesterday";
        }else{
            return days+''+"days ago";
        }
    }

    else if(weeks <= 4.3){
        if(weeks==1){
           return "a week ago";
        }else{
            return weeks+''+"weeks ago";
        }
    }

    else if(months <=12){
        if(months==1){
           return "a month ago";
        }else{
           return months+''+"months ago";
        }
    }

    else{
        if(years==1){
           return "one year ago";
        }else{
           return years+''+"years ago";
        }
    }
}*/

}

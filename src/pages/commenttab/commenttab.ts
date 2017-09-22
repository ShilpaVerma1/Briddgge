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
afstatus:Array <FirebaseListObservable<any>>;
afstatus1:Array <FirebaseListObservable<any>>;
evstatus:Array <FirebaseListObservable<any>>;
apiurl:any;
story:any;
commentid:any;
constructor(public platform:Platform,db: AngularFireDatabase,public http:Http,private storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
    this.statusid= navParams.data;
    this.db=db;
    this.apiurl='http://briiddge.com/';
this.storage.get('storyevent').then((storyevent)=>{
            this.story=storyevent;
/**************Stories************/

    if(this.story=='stories'){
    this.storage.get('usrid').then((usrid)=>{
        this.http.get(this.apiurl+"fetchStatusInner?post_id="+this.statusid+"&user_id="+usrid).map(res => res.json()).subscribe(data => {
        this.commentdata=data.comment;
        })
    })
    var refNew = this.db.list('/Count/'+this.statusid);
        refNew.subscribe((data)=>{   
        this.afstatus=data;
   })
 
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

                     })
                })
           }
       })
    })
 }
/**************Events************/

  if(this.story=='events'){
    this.storage.get('usrid').then((usrid)=>{
    this.http.get(this.apiurl+"fetchEventInner?evt_id="+this.statusid+"&user_id="+usrid).map(res => res.json()).subscribe(data => {
            this.commentdata=data.comment;
            })
        })
    
        var refNew = this.db.list('/EventCount/'+this.statusid);
            refNew.subscribe((data)=>{   
            this.afstatus=data;
            console.log(this.afstatus);
        })
  
        var ref = this.db.list('/EventCommentss/');
        ref.subscribe((data)=>{  
            this.afstatus1=[];
        data.forEach(snapshot=>{
            var keys=snapshot.$key;
            if(keys==this.statusid){
                var reff=this.db.list('/EventCommentss/'+keys+'/Comments/')
                    reff.subscribe((keydata)=>{
                        keydata.forEach(data=>{
                            this.afstatus1.push(data);

                        })
                    })
            }
        })
    })
  }
 })
}

senddd(afcount,afkey){

    if(this.commenttext==undefined){
        this.platform.ready().then(() => {
            window.plugins.toast.show("Write your comment", "long", "center");
        })

    }else{
        this.storage.get('usrid').then((usrid)=>{

            this.http.get(this.apiurl+"getProfile?user_id="+usrid).map(res => res.json()).subscribe(data => {
            this.storage.get('storyevent').then((storyevent)=>{
            this.story=storyevent;
            if(this.story=='stories'){
             this.counts = this.db.list('/Commentss/'+this.statusid+'/Comments/');

               /****Push comments for stories****/
                this.counts.push({ 
                    loginuserid:usrid,
                    comment:this.commenttext,
                    createdAt : firebase.database.ServerValue.TIMESTAMP,
                    Likes:0,
                    profile_img:data.img,
                    name:data.name,
                    user_ids:''
                });
                /****Increase comment count in count node for stories ****/
                var newcommentcount=JSON.parse(afcount)+1;
                var ref=this.db.list('/Count/'+ this.statusid);
                ref.update(afkey,{
                     Commentcount:newcommentcount,
                })
               }
            if(this.story=='events'){
             this.counts = this.db.list('/EventCommentss/'+this.statusid+'/Comments/');
               /****Push comments for events****/
                this.counts.push({ 
                    loginuserid:usrid,
                    comment:this.commenttext,
                    createdAt : firebase.database.ServerValue.TIMESTAMP,
                    Likes:0,
                    profile_img:data.img,
                    name:data.name,
                    user_ids:''
                });
                this.http.get(this.apiurl+"saveCommentEvent?user_id="+usrid+"&event_id="+this.statusid+"&comment="+this.commenttext).map(res => res.json()).subscribe(data => {
                    if(data.status=='Success'){
                        this.commentid=data.id;
                    }
                })
                /****Increase comment count in count node for stories ****/
                var newcommentcount=JSON.parse(afcount)+1;
                var ref=this.db.list('/EventCount/'+ this.statusid);
                ref.update(afkey,{
                     Commentcount:newcommentcount,
                })
             }
            })
          })
        })
    }
}

like(key,likecount,usrids,commentid){
  this.storage.get('usrid').then((usrid)=>{
    var split_str = usrids.split(",");
    var uid= usrid.toString();
    /******Like  comments******/
    if(split_str.includes(uid)==false){
        let userids=usrids+','+uid
         var newcount=JSON.parse(likecount)+1;
          this.storage.get('storyevent').then((storyevent)=>{
            this.story=storyevent;
            if(this.story=='stories'){
                var ref=this.db.list('/Commentss/'+this.statusid+'/Comments/');
                ref.update(key,{
                    Likes:newcount,
                    user_ids:userids
                }) 
             }
             if(this.story=='events'){
                var ref=this.db.list('/EventCommentss/'+this.statusid+'/Comments/');
                ref.update(key,{
                    Likes:newcount,
                    user_ids:userids
                })
                this.http.get(this.apiurl+"likeCommentEvent?user_id="+usrid+"&comment_id="+commentid+"&likesComment=1").map(res => res.json()).subscribe(data => {
                    
                }) 
             }
           }) 
        
    }
    /******Unlike  comments******/
    else{
          var remove_index=split_str.indexOf(uid);
          split_str.splice(remove_index,1);
           var userids=split_str.join(",");
           var count=JSON.parse(likecount)-1;
            this.storage.get('storyevent').then((storyevent)=>{
            this.story=storyevent;

            if(this.story=='stories'){
                var ref=this.db.list('/Commentss/'+this.statusid+'/Comments/');
                ref.update(key,{
                    Likes:count,
                    user_ids:userids
                }) 
            }
             if(this.story=='events'){
                var ref=this.db.list('/EventCommentss/'+this.statusid+'/Comments/');
                this.http.get(this.apiurl+"likeCommentEvent?user_id="+usrid+"&comment_id="+commentid+"&likesComment=0").map(res => res.json()).subscribe(data => {
                    
                }) 
                ref.update(key,{
                    Likes:count,
                    user_ids:userids
                }) 
             }
            })
    }
 })
}
/*send(afcount,afkey){

  this.storage.get('usrid').then((usrid)=>{
        this.http.get(this.apiurl+"saveComment?user_id="+usrid+"&post_id="+this.statusid+"&comment="+this.commenttext).map(res => res.json()).subscribe(data => {
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
                    this.http.get(this.apiurl+"fetchStatusInner?post_id="+this.statusid+"&user_id="+usrid).map(res => res.json()).subscribe(data => {
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
        this.http.get(this.apiurl+"likeComment?user_id="+usrid+"&comment_id="+pid+"&likesComment=0").map(res => res.json()).subscribe(data => {
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

import { Component } from '@angular/core';
import { NavController,App, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { OtherprofilePage } from '../otherprofile/otherprofile';

@Component({
  selector: 'page-likestab',
  templateUrl: 'likestab.html',
})
export class LikestabPage {
statusid:any;
likesdata=[];
apiurl:any;

constructor(public app:App,public http:Http,private storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
 this.statusid= navParams.data;
 this.apiurl='http://kanchan.mediaoncloud.com/briddgge/';

 this.storage.get('usrid').then((usrid)=>{

   this.http.get(this.apiurl+"fetchStatusInner?post_id="+this.statusid+"&user_id="+usrid).map(res => res.json()).subscribe(data => {
      this.likesdata=data.likesArray;
    })
 })
}
view(id){
    this.app.getRootNav().push(OtherprofilePage,{
      otheruserid:id
    });
}

}

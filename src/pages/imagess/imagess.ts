import { Component } from '@angular/core';
import { NavController, NavParams,PopoverController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';


@Component({
  selector: 'page-imagess',
  templateUrl: 'imagess.html',
})
export class ImagessPage {
status:any=[];
uid:any;
constructor(private storage: Storage,public http:Http,public navCtrl: NavController,public popoverCtrl: PopoverController, public navParams: NavParams) {
//  var usrid=navParams.data;
 this.storage.get('usrid').then((usrid)=>{
        this.http.get("http://kanchan.mediaoncloud.com/briddgge/fetchStatus?user_id="+usrid).map(res => res.json()).subscribe(data => {
           this.status=data;
       })
  })
}

}

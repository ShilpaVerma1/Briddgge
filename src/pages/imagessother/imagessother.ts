import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';

@Component({
  selector: 'page-imagessother',
  templateUrl: 'imagessother.html',
})
export class ImagessotherPage {
status:any=[]
constructor(private storage: Storage,public http:Http,public navCtrl: NavController, public navParams: NavParams) {
var usrid=navParams.data;
 this.http.get("http://kanchan.mediaoncloud.com/briddgge/fetchStatus?user_id="+usrid).map(res => res.json()).subscribe(data => {
           this.status=data;
 })
}

}

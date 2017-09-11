import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BriddggeHomePage } from '../briddggehome/briddggehome';
import { ImagessotherPage } from '../imagessother/imagessother';
import { VideossotherPage } from '../videossother/videossother';

import { Http } from '@angular/http';

@Component({
  selector: 'page-otherprofile',
  templateUrl: 'otherprofile.html',
})
export class OtherprofilePage {
  tab1Root = ImagessotherPage;
  tab2Root = VideossotherPage;
  tab3Root = VideossotherPage;
  uid:any;profiledata=[]
constructor(public http:Http,public navCtrl: NavController, public navParams: NavParams) {
  this.uid=this.navParams.get('otheruserid');
  this.http.get("http://kanchan.mediaoncloud.com/briddgge/getProfile?user_id="+this.uid).map(res => res.json()).subscribe(data => {
      this.profiledata=data;
  })
}

}

import { Component } from '@angular/core';
import { NavController,Platform, NavParams } from 'ionic-angular';
import { BriddggeHomePage } from '../briddggehome/briddggehome';
import { ImagessotherPage } from '../imagessother/imagessother';
import { VideossotherPage } from '../videossother/videossother';

import { Http } from '@angular/http';
declare var window;
@Component({
  selector: 'page-otherprofile',
  templateUrl: 'otherprofile.html',
})
export class OtherprofilePage {
  tab1Root = ImagessotherPage;
  tab2Root = VideossotherPage;
  tab3Root = VideossotherPage;
  uid:any;profiledata=[]
  apiurl:any;

constructor(public platform:Platform,public http:Http,public navCtrl: NavController, public navParams: NavParams) {
  this.uid=this.navParams.get('otheruserid');
  this.apiurl='http://briiddge.com/';

  this.http.get(this.apiurl+"getProfile?user_id="+this.uid).map(res => res.json()).subscribe(data => {
  if(data.status!='failed' || data.status!='Failed'){
         this.profiledata=data;
      }else{
         this.platform.ready().then(() => {
               window.plugins.toast.show("Something went wrong", "long", "center");
          }) 
      }
  })
}

}

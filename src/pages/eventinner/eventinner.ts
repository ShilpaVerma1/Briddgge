import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
@Component({
  selector: 'page-eventinner',
  templateUrl: 'eventinner.html',
})
export class EventinnerPage {
apiurl:any;
eventstatus:any=[];
photos:any=[];
constructor(public http:Http,private storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
 this.apiurl='http://briiddge.com/';
 this.storage.get('usrid').then((usrid)=>{
    // this.http.get(this.apiurl+"fetchEvents?user_id="+usrid).map(res => res.json()).subscribe(data => {
    //   this.eventstatus=data;
  
    // })
    this.http.get(this.apiurl+"fetchEventsAll?user_id="+usrid).map(res => res.json()).subscribe(data => {
      if(data.status!='Failed'){
        this.eventstatus=data;
      }else{
        alert('Records not found');
      }
     
  
    })
 })
}


}

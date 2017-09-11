import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { BriddggeHomePage } from '../briddggehome/briddggehome';
@Component({
  selector: 'page-findfriends',
  templateUrl: 'findfriends.html',
})
export class FindfriendsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

 }
profile(){
  this.navCtrl.push(ProfilePage);
}
home(){
  this.navCtrl.push(BriddggeHomePage);
}


}

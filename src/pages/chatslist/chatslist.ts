import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { BriddggeHomePage } from '../briddggehome/briddggehome';


@Component({
  selector: 'page-chatslist',
  templateUrl: 'chatslist.html',
})
export class ChatslistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

profile(){
  this.navCtrl.push(ProfilePage);
}
home(){
  this.navCtrl.push(BriddggeHomePage);
}

}

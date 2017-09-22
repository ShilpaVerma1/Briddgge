import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { BriddggeHomePage } from '../briddggehome/briddggehome';
import { Media, MediaObject } from '@ionic-native/media';

@Component({
  selector: 'page-chatslist',
  templateUrl: 'chatslist.html',
})
export class ChatslistPage {
file:any;
  constructor(private media: Media,public navCtrl: NavController, public navParams: NavParams) {
  }

profile(){
  this.navCtrl.push(ProfilePage);
}
home(){
  this.navCtrl.push(BriddggeHomePage);
}
record(){
  //  try {
  //   let media = new Media('../Library/NoCloud/recording.wav');
  //   media.startRecord();
  // }
  // catch (e) {
  //   this.showAlert('Could not start recording.');
  // }
}
}

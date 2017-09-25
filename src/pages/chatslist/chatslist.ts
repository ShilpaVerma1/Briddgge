import { Component } from '@angular/core';
import { NavController, NavParams,Platform } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { BriddggeHomePage } from '../briddggehome/briddggehome';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';
@Component({
  selector: 'page-chatslist',
  templateUrl: 'chatslist.html',
})
export class ChatslistPage {

constructor(public platform:Platform,private media: Media, private file: File,public navCtrl: NavController, public navParams: NavParams) {

}

profile(){
  this.navCtrl.push(ProfilePage);
}
home(){
  this.navCtrl.push(BriddggeHomePage);
}
/**************Audio record***************/
record(){

// const file: MediaObject = this.media.create('downloads/to/file.mp3');
// file.startRecord();

// setTimeout(()  => {
//       file.stopRecord();
//       file.release();
//     }, 10000);
const fileName = 'my_file.m4a';
this.file.createFile(this.file.tempDirectory, fileName, true).then(() => {
 this.platform.ready().then(() => {
    if (this.platform.is('ios')) {
      let file = this.media.create(this.file.tempDirectory.replace(/^file:\/\//, '') +fileName);
      file.startRecord();
        alert('cache dir: ' + this.file.cacheDirectory);
        alert(`start recording ${fileName}`);
      window.setTimeout(() => {
        file.stopRecord();
       alert('duration: ' + file.getDuration());
       file.release();
       alert(`done recording ${fileName}`);
      }, 20000);
    file.onError.subscribe(error =>alert('Error!'+ error));
    }
  })
 });
}
}

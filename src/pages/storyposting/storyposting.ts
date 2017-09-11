import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VideossPage } from '../videoss/videoss';
import { ImagessPage } from '../imagess/imagess';
import { ProfilePage } from '../profile/profile';
import { BriddggeHomePage } from '../briddggehome/briddggehome';

@Component({
  selector: 'page-storyposting',
  templateUrl: 'storyposting.html',
})
export class StorypostingPage {
  tab1Root = ImagessPage;
  tab2Root = VideossPage;
  tab3Root = VideossPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
profile(){
  this.navCtrl.push(ProfilePage);
}
home(){
  this.navCtrl.push(BriddggeHomePage);
}
}

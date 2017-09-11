import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';


@Component({
  selector: 'page-members',
  templateUrl: 'members.html',
})
export class MembersPage {
  constructor(public navCtrl: NavController, public alertCtrl:AlertController,public navParams: NavParams) {
  }

}

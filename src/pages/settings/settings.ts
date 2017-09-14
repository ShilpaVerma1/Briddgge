import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  orderBy:any;
constructor(public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams) {
}
 selected(value: string) {
    this.orderBy = value;
  }
}

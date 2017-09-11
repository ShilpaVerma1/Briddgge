import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-livevideoshome',
  templateUrl: 'livevideoshome.html',
})
export class LivevideoshomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivevideoshomePage');
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
fireAuth:any;  
public recaptchaVerifier:firebase.auth.RecaptchaVerifier;
constructor(public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams) {
   this.fireAuth=firebase.auth();
}

  ionViewDidLoad() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  }
signIn(phoneNumber: number){
  const appVerifier = this.recaptchaVerifier;
  const phoneNumberString = "+" + phoneNumber;

  // this.fireAuth.signInWithPhoneNumber(phoneNumberString, appVerifier)
  //   .then( confirmationResult => {
  //      let prompt = this.alertCtrl.create({
  //         title: 'Enter the Confirmation code',
  //         inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
  //         buttons: [
  //           { text: 'Cancel',
  //             handler: data => { 
  //               console.log('Cancel clicked'); }
  //           },
  //           { text: 'Send',
  //             handler: data => {
  //                alert(data.confirmationCode);
  //             }
  //           }
  //         ]
  //         });
  //         prompt.present();
  // })
  // .catch(function (error) {
  //  alert(error);
 // });

}
}

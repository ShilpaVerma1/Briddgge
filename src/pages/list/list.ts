import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { FormBuilder, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  fireAuth:any;userData:any;
  public registerForm;
  erroremail:any;items:any;
  errorpass:any;errorname:any;
  submitAttempt: boolean = false;
  constructor(db: AngularFireDatabase, public formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.fireAuth=firebase.auth();
    this.userData=firebase.database().ref('/usrdata');
      Observable.interval(30000).subscribe(x => {
        this.erroremail=''; this.errorpass='';this.errorname='';
     })
     let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.registerForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      fullname: ['',Validators.compose([Validators.required])]
    });
  }

doRegister(email: string, password: string,name:string): any {
    this.submitAttempt = true;
     if (this.registerForm.valid){
       this.fireAuth.createUserWithEmailAndPassword(email, password).then((newUser) => {
          this.erroremail=''; this.errorpass='';this.errorname='';
          this.fireAuth.currentUser.sendEmailVerification().then(function() {
              alert("Check your email for completing registeration process")
          });
          this.userData.child(newUser.uid).set({email: email,name:name});

          //this.navCtrl.push(LoginPage);
        },(error) => {
          console.log(error);
          if(error.code=='auth/email-already-in-use'){
            alert('The email address is already in use by another account.');
          }else{
            alert('Something went wrong');
          }
        });
     }else{
        this.erroremail='Please enter a valid email.'; 
        this.errorpass='Your password must be more than 6 characters.';
        this.errorname="Your full name can't empty.";
     }
}

login(){
  this.navCtrl.push(LoginPage);
}
}

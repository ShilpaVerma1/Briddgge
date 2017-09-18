import { Component } from '@angular/core';
import { NavController, NavParams,Platform,MenuController,AlertController,LoadingController} from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignupPage } from '../signup/signup';
import { FormBuilder, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { ProfilePage } from '../profile/profile';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { BriddggeHomePage } from '../briddggehome/briddggehome';

declare var window: any;

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
public loginForm;
items:any;
submitAttempt: boolean = false;
error:any;errormsg:any;
apiurl:any;

constructor(public http:Http,public platform:Platform,private storage: Storage,public menu:MenuController,public navCtrl: NavController,db: AngularFireDatabase, public formBuilder: FormBuilder,public alertCtrl: AlertController, public loadingCtrl: LoadingController, public navParams: NavParams) {
    this.apiurl='http://briiddge.com/';

     Observable.interval(30000).subscribe(x => {
        this.error=''; this.errormsg='';
     })
let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
}

loginUser(email, password): any {
   
   this.submitAttempt = true;
   if (this.loginForm.valid){
     this.error='';
       this.http.get(this.apiurl+"login?email="+email+"&password="+password).map(res => res.json()).subscribe(data => {
          if(data.status!='Failed'){
            this.storage.set('usrid',data.id);

              let loading = this.loadingCtrl.create({
                spinner: 'ios',
                content: ''
              });   
              loading.present(); 
            setTimeout(() => {
                //  alert("You are logged in successfully");
              loading.dismiss();
              this.navCtrl.push(BriddggeHomePage);
            },7000)
                this.platform.ready().then(() => {
                        window.plugins.toast.show("You are logged in successfully", "long", "center");
                })
          }else{
           // alert('Invalid details');
             this.platform.ready().then(() => {
                  window.plugins.toast.show("Invalid details", "long", "center");
              })
          }

                //  this.navCtrl.push(BriddggeHomePage,{
                //    userid:data.id
                //  }); 
      })
            
    }else{
      this.error='Enter valid email id.'
      this.errormsg='Your password must be more than 6 characters.'
    } 
 }
register()
{
  this.navCtrl.push(SignupPage);
}
forgot(email: string){
  if(email==undefined){
   // alert('Please fill the email id to continue');
    this.platform.ready().then(() => {
         window.plugins.toast.show("Please fill the email id to continue", "long", "center");
    })
  }
  else{

  }
}
ionViewDidEnter() {
    //to disable menu, or
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // to enable menu.
    this.menu.enable(true);
  }
}

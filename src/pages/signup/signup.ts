import { Component,ViewChild,NgZone } from '@angular/core';
import { NavController, NavParams,Platform,MenuController,LoadingController,ToastController,ActionSheetController } from 'ionic-angular';
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
import { Camera,CameraOptions } from '@ionic-native/camera';

declare var window: any;

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {

 userData:any;
  public registerForm;errorgender:any;
  erroremail:any;schools:any;
  errorpass:any;errorname:any;errorcity:any;
  submitAttempt: boolean = false;
  private searchQuery: string = '';
  private citydata: string[];
  private items: string[];
  captureDataUrl:any;
  loading:any;imgurl:any;
  gender:any;
  typee:any;
  eye:any;
  statesdata:any;
  statesdata1:any;
  constructor(public platform:Platform,public zone : NgZone,private toastCtrl: ToastController,public loadingCtrl:LoadingController,public camera: Camera,public http:Http,public actionSheetCtrl: ActionSheetController,public menu:MenuController,db: AngularFireDatabase, public formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
      Observable.interval(20000).subscribe(x => {
        this.erroremail=''; this.errorpass='';this.errorname=''; this.errorgender='';
        this.errorcity='';
      
    })
    this.typee='password';
     let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.registerForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      fullname: ['',Validators.compose([Validators.required])],
      gender: ['',Validators.compose([Validators.required])],
      city: ['',Validators.compose([Validators.required])],
      school:['',Validators.compose([Validators.required])],
      fraternity:['',Validators.compose([Validators.required])],
      states:['',Validators.compose([Validators.required])]
    });
        this.http.get("http://kanchan.mediaoncloud.com/briddgge/getStates").map(res => res.json()).subscribe(data => {
         
          this.statesdata=data;
                    
         })

  }
selstates(states){
  this.http.get("http://kanchan.mediaoncloud.com/briddgge/getCity?state="+states).map(res => res.json()).subscribe(data => {
    this.citydata=data;
  })

}
// getItems(ev: any) {
//     // Reset items back to all of the items
//     this.http.get("http://kanchan.mediaoncloud.com/briddgge/getCity").map(res => res.json()).subscribe(data => {
//             this.citydata=data;
//     // set val to the value of the searchbar
//     let val = ev.target.value;
//     var q = ev.srcElement.value;

//     // if the value is an empty string don't filter the items
//       if (!q) {
//         return;
//       }
//       this.citydata=this.citydata.filter((v)=>{
//           if(v && q.length>3){      
//                 if (v.toLowerCase().indexOf(q.toLowerCase())>-1) {
//                   return true;
//                 }
//                 return false;
//              }   
//          })
//        // console.log(q,this.citydata.length)

//        })
// }  
doRegister(captureDataUrl,school,city,email, password,name,gender,fraternity,states) {
      this.submitAttempt = true;
      if(captureDataUrl==undefined){
        captureDataUrl="http://2.mediaoncloud.com/Shilpa/icon_person_by_ninjavdesign-d8x96sl.png";
      }

     if (this.registerForm.valid){ 
          this.http.get("http://kanchan.mediaoncloud.com/briddgge/signup?email="+email+"&gender="+gender+"&user_type="+fraternity+"&city="+city+"&password="+password+"&name="+name+"&university="+school+"&img="+captureDataUrl+"&state="+states).map(res => res.json()).subscribe(data => {
              if(data.msg=="Please fill all fields"){
                //alert("Please fill all fields");
                this.platform.ready().then(() => {
                  window.plugins.toast.show("Please fill all fields", "long", "center");
                })
              }else if(data.msg=="Already Signed Up"){
               // alert("Email id already exists");
                this.platform.ready().then(() => {
                  window.plugins.toast.show("Email id already exists", "long", "center");
                })
              }else{
                //alert("Check your email for completing registeration process");
                this.platform.ready().then(() => {
                  window.plugins.toast.show("Check your email for completing registeration process", "long", "center");
                }) 
                this.navCtrl.push(LoginPage);
             }
          })
     }else{

        this.errorcity='This field is mandatory to be filled.'
        this.erroremail='Please enter a valid email.'; 
        this.errorname="Your full name can't be empty.";
        this.errorgender="Gender field can't be empty.";
        this.errorpass='Your password must be more than 6 characters.';
        window.plugins.toast.show("All fields are mandatory to be filled", "long", "center");

     }
  
}
photoupload(){
  let actionSheet = this.actionSheetCtrl.create({
      buttons: [{
          text: 'Upload Picture',
          cssClass:'upload',
          handler: () => {
            this.getPicture();
         
          }
        },
        {
          text: 'Use Camera',
          cssClass:'camera',
          handler: () => {
           this.takePicture();
        
          }
        },
        {
          text: 'Cancel',
          cssClass:'cancel',
          role: 'cancel'
        }]
    });
    actionSheet.present();
}
getPicture(){
     this.camera.getPicture({
        quality : 95,
        sourceType : this.camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit : true,
        saveToPhotoAlbum: true,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,     
      }).then((data) => {
          this.captureDataUrl= 'data:image/jpeg;base64,' + data;
        
          let storagee = firebase.storage().ref();

          const filename = Math.floor(Date.now() / 1000);
          const imageRef = storagee.child(`profilepictures/${filename}.jpg`);          
          this.loading = this.loadingCtrl.create({
              spinner: 'ios',
              content: 'Uploading...',
          });
          this.loading.present(); 
          imageRef.putString(this.captureDataUrl,firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {

            this.imgurl=snapshot.downloadURL;
           

          })
          this.loading.dismiss();
          }, (err) => {
          // alert(err)
      });
}
takePicture(){
     return new Promise((resolve)=>{
        const options: CameraOptions = {
          quality : 95,
          allowEdit : true,
          saveToPhotoAlbum: true,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG, 
          sourceType : this.camera.PictureSourceType.CAMERA,
        }
     
        this.zone.run(()=>{ 
          this.camera.getPicture(options).then((imageData) => {
           
          let storagee = firebase.storage().ref();
          this.captureDataUrl= 'data:image/jpeg;base64,' + imageData;

          const filename = Math.floor(Date.now() / 1000);
          const imageRef = storagee.child(`profilepictures/${filename}.jpg`);          
          this.loading = this.loadingCtrl.create({
              spinner: 'ios',
              content: 'Uploading...',
          });
          this.loading.present(); 
          imageRef.putString(this.captureDataUrl,firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
                  this.imgurl=snapshot.downloadURL;
          })
          this.loading.dismiss();

          }, (err) => {
            //    alert(err);
          });
       })  
   })
}
 onChange(SelectedValue){
   console.log(SelectedValue);
   if(SelectedValue.length>3)
    this.http.get("http://kanchan.mediaoncloud.com/briddgge/getUniversity?city="+SelectedValue).map(res => res.json()).subscribe(data => {
     this.schools=data;

   })
 }
 onChangesel(college){
  console.log(college);
 }
 showpass(){
  this.typee='text';
  this.eye='true';
}
hidepass(){
   this.typee='password';
   this.eye='';
}
sel(val){
  //console.log(val);
}
selected(value: string) {
    this.gender = value;
}
back(){
  this.navCtrl.push(LoginPage);
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


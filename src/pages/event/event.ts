import { Component } from '@angular/core';
import { NavController, AlertController,NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { DatePicker } from '@ionic-native/date-picker';
import * as firebase from 'firebase';
import { AngularFireModule} from 'angularfire2';

@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  citydata:any;toggled:any;schools:any;
  public recaptchaVerifier:firebase.auth.RecaptchaVerifier;
  constructor(public alertCtrl: AlertController,public http:Http,private datePicker: DatePicker,private storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
  }
//  ionViewDidLoad() {
//   this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
// }

  // getItems(city) {
  //   if(city.length>3)
  //   this.http.get("http://kanchan.mediaoncloud.com/briddgge/colleges.php?city="+city).map(res => res.json()).subscribe(data => {
  //     this.citydata=data;

  //  })
  // }
  
  getItems(ev: any) {
    // Reset items back to all of the items
    this.http.get("http://kanchan.mediaoncloud.com/briddgge/colleges.php?slug=city").map(res => res.json()).subscribe(data => {
            this.citydata=data;
   

    // set val to the value of the searchbar
    let val = ev.target.value;
    var q = ev.srcElement.value;

    // if the value is an empty string don't filter the items
      if (!q) {
        return;
      }
      this.citydata=this.citydata.filter((v)=>{
          if(v && q.length>3){      
                if (v.toLowerCase().indexOf(q.toLowerCase())>-1) {
                  return true;
                }
                return false;
             }   
         })
     //  console.log(q,this.citydata.length)

       })
  } 
  City(SelectedValue){
   console.log(SelectedValue);
  //  if(SelectedValue.length>3)
  //   this.http.get("http://kanchan.mediaoncloud.com/briddgge/colleges.php?city="+SelectedValue).map(res => res.json()).subscribe(data => {
  //    this.schools=data;

  //  })

 }
 onChangesel(college){
  console.log(college);
 }
signIn(phoneNumber: number){
  const appVerifier = this.recaptchaVerifier;
  const phoneNumberString = "+" + phoneNumber;
  firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
    .then( confirmationResult => {
       let prompt = this.alertCtrl.create({
          title: 'Enter the Confirmation code',
          inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
          buttons: [
            { text: 'Cancel',
              handler: data => { console.log('Cancel clicked'); }
            },
            { text: 'Send',
              handler: data => {
                  console.log(data.confirmationCode);
              }
            }
          ]
          });
          prompt.present();
  })
  .catch(function (error) {
   alert(error);
  });

}
//  onChange(SelectedValue){
//    console.log(SelectedValue);
//  }
 showDate(){
      this.datePicker.show({
        date: new Date(),
        mode: 'date',
        is24Hour: true,
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
      }).then(
        (date )=>{ 
        //  alert( date);
      },(err) =>{
        alert(err);
      });
 }
  toggleSearch() {
        this.toggled = this.toggled ? false : true;
  }
showTime(){
        this.datePicker.show({
        date: new Date(),
        mode: 'time',
        is24Hour: true,
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
      }).then(
        (date )=>{ 
       //   alert( date);
      },(err) =>{
        alert(err);
      });
  
} 
}

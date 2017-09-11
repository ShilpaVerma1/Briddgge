import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';

@Component({
  selector: 'page-addeventinner',
  templateUrl: 'addeventinner.html',
})
export class AddeventinnerPage {
eventname:any;eventlocation:any;price:any;
today:any;
constructor(public navCtrl: NavController, private datePicker: DatePicker,public navParams: NavParams) {


}

rangeprice(ev:any){
  this.price=ev._value;
}
post(){
  
}
selectday(){
   this.datePicker.show({
        date: new Date(),
        mode: 'date',
        is24Hour: true,
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
      }).then(
        (date )=>{ 
          alert( date);
      },(err) =>{
        alert(err);
      });
}
selecttime(){
     this.datePicker.show({
        date: new Date(),
        mode: 'time',
        is24Hour: true,
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
      }).then(
        (date )=>{ 
          alert( date);
          this.today=date;
      },(err) =>{
        alert(err);
      }); 
}
onChange(ev){

}
}

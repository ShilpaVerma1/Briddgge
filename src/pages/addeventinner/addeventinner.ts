import { Component,NgZone } from '@angular/core';
import { NavController, NavParams,Platform,LoadingController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { ImagePicker } from '@ionic-native/image-picker';
import { Storage } from '@ionic/storage';
import { Device } from '@ionic-native/device';
import { MediaCapture,CaptureVideoOptions,CaptureError, MediaFile } from '@ionic-native/media-capture';
import { File } from '@ionic-native/file';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';
import { Http } from '@angular/http';

declare var window;

@Component({
  selector: 'page-addeventinner',
  templateUrl: 'addeventinner.html',
})
export class AddeventinnerPage {
eventname:any;eventlocation:any;price:any;
time:any;
daytime:any;
captureDataUrl:any;
videourl:any;
MediaFile:any;
imageurl:any;imagearray:any=[];
apiurl:any;
constructor(public storage:Storage,public http:Http,public loadingCtrl:LoadingController,db: AngularFireDatabase,public zone : NgZone,private file: File,public camera: Camera, private mediaCapture: MediaCapture,private imagePicker: ImagePicker,public platform:Platform,public navCtrl: NavController, private datePicker: DatePicker,public navParams: NavParams) {
    this.apiurl='http://kanchan.mediaoncloud.com/briddgge/';
 //   this.videourl='https://firebasestorage.googleapis.com/v0/b/geofirebase-b42f3.appspot.com/o/statusvideo%2F1504847497228?alt=media&token=7f3e554f-06a2-45b1-90bb-16a974a529a8';
 
}

rangeprice(ev:any){
  this.price=ev._value;
}

selectday(){
   this.datePicker.show({
        date: new Date(),
        mode: 'date',
        is24Hour: true,
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
      }).then(
        (date )=>{ 
          this.daytime=date;
      },(err) =>{
        this.platform.ready().then(() => {
          window.plugins.toast.show(err, "long", "center");
        })
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
          this.time=date;
      },(err) =>{
        this.platform.ready().then(() => {
          window.plugins.toast.show(err, "long", "center");
        })
      }); 
}
selimages(index){
  /*****Capturing image from camera*****/
  if(index==1){
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
          this.captureDataUrl= 'data:image/jpeg;base64,' + imageData;
          
          const filename = Math.floor(Date.now() / 1000);
          let storagee = firebase.storage().ref();

          const imageRef = storagee.child(`eventimages/${filename}.jpg`);          
          let loading = this.loadingCtrl.create({
              spinner: 'ios',
              content: 'Uploading...',
          });
          loading.present(); 
          imageRef.putString(this.captureDataUrl,firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
            this.imageurl=snapshot.downloadURL;
              loading.dismiss();

          })
          loading.dismiss();

          }, (err) => {
                console.log(err);
          });
       })  
   })
  }
/*************Accessing multiple images from gallery & upload**************/

  if(index==2){
        let options = {
        // maximumImagesCount: 8,
        // width: 500,
        // height: 500,
         quality: 100
        }
    this.imagePicker.getPictures(options).then((results) => {
      let imageURLs=[];
      let storagee = firebase.storage().ref();

      for (var i = 0; i < results.length; i++) {
     
         var imagePath = results[i].substr(0, results[i].lastIndexOf('/') + 1);
         var imageName = results[i].substr(results[i].lastIndexOf('/') + 1);
         this.file.readAsDataURL(imagePath, imageName).then((b64str) => {
            const filename = Math.floor(Date.now() / 1000);
            const imageRef = storagee.child(`eventimages/${filename}.jpg`);          
            let loading = this.loadingCtrl.create({
                spinner: 'ios',
                content: 'Uploading...',
            });
            loading.present(); 
            imageRef.putString(b64str,firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
              this.imageurl=snapshot.downloadURL;
              this.imagearray.push(this.imageurl);
                loading.dismiss();
            })
            loading.dismiss();
        }).catch(err => {
          this.platform.ready().then(() => {
              window.plugins.toast.show(err.message, "long", "center");
           })
         })
       }
    },(err) => {
           this.platform.ready().then(() => {
              window.plugins.toast.show(err, "long", "center");
          })
     });
  }
  
/*************Capture video from camera**************/

if(index==3){
   return new Promise((resolve)=>{

      let options: CaptureVideoOptions = { limit: 1 };
      this.mediaCapture.captureVideo().then((data) => {
            this.MediaFile=data[0].fullPath;
            window.resolveLocalFileSystemURL(this.MediaFile, (fileEntry) => {
              fileEntry.file( (file) => {
                let fileReader = new FileReader();         
                fileReader.onloadend= (result: any) => {
                  let arrayBuffer = result.target.result;
                  let blob = new Blob([new Uint8Array(arrayBuffer)], {type: 'video/mp4'});
                  const name = '' + Date.now();
                  let loading = this.loadingCtrl.create({
                          spinner: 'ios',
                          content: 'Uploading...',
                      });
                  loading.present(); 
                     firebase.storage().ref().child(`eventvideo/${name}`).put(blob).then((snapshot)=> {
                       this.videourl=snapshot.downloadURL;
                      loading.dismiss();

                    });
                };
                fileReader.readAsArrayBuffer(file);
              })
            }, (error) => {
               this.platform.ready().then(() => {
                     window.plugins.toast.show(error, "long", "center");
                })
              });
          
            },(err: CaptureError) => {
               this.platform.ready().then(() => {
                  window.plugins.toast.show(err, "long", "center");
               })
            });
      })
  }
  /*************Video selection from gallery**************/
  if(index==4){
    return new Promise((resolve)=>{
    this.zone.run(()=>{ 
     this.camera.getPicture({
        quality : 95,
        destinationType: this.camera.DestinationType.FILE_URI,
        sourceType : this.camera.PictureSourceType.PHOTOLIBRARY,
        mediaType:this.camera.MediaType.VIDEO
      }).then((videouri) => {
        this.captureDataUrl=videouri;
        let storagee = firebase.storage().ref();

      window.resolveLocalFileSystemURL('file://' + videouri, (fileEntry) => {
         fileEntry.file( (file) => {
           let fileReader = new FileReader();         
           fileReader.onloadend= (result: any) => {
             let arrayBuffer = result.target.result;
             let blob = new Blob([new Uint8Array(arrayBuffer)], {type: 'video/mp4'});
             const name = '' + Date.now();
            let loading = this.loadingCtrl.create({
                    spinner: 'ios',
                    content: 'Uploading...',
                });
            loading.present(); 
               firebase.storage().ref().child(`eventvideo/${name}`).put(blob).then((snapshot)=> {
                 this.videourl=snapshot.downloadURL;
                loading.dismiss();
              });
          };
           fileReader.readAsArrayBuffer(file);
         }, (error) => {
           this.platform.ready().then(() => {
              window.plugins.toast.show(error, "long", "center");
           })
         });
      }, (error) => {
         this.platform.ready().then(() => {
              window.plugins.toast.show(error, "long", "center");
           })
         });  
       }, (err) => {
          this.platform.ready().then(() => {
              window.plugins.toast.show(err, "long", "center");
           })
      });
    })
    })
  }
}

onChange(ev){

}
post(aray,eventtype,price,vid){
  var time=document.getElementById('timee').innerHTML;
  var year=document.getElementById('yearr').innerHTML;

    if(this.eventname!=undefined && this.eventlocation!=undefined && time!='' && year!='' && eventtype!=undefined && price!=undefined ||vid ){
  
      this.storage.get('usrid').then((usrid)=>{
        this.http.get( this.apiurl+"saveEvent?user_id="+usrid+"&name="+this.eventname+"&location="+this.eventlocation+"&event_type="+eventtype+"&evt_date="+year+"&evt_time="+time+"&price="+price+"&video="+vid).map(res => res.json()).subscribe(data => {
          if(data.status=='Success'){
          
            for(var i=0;i<aray.length;i++) {
              this.http.get(this.apiurl+"saveEventImage?evt_id="+data.id+"&img="+aray[i]).map(res => res.json()).subscribe(data => {
                  
              })
            }
            this.platform.ready().then(() => {
                window.plugins.toast.show('Event successfully posted', "long", "center");
            })
          }
        })
      })
    }
}
}

import { Component,NgZone } from '@angular/core';
import { NavController, NavParams,Platform,LoadingController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { ImagePicker } from '@ionic-native/image-picker';
import { Storage } from '@ionic/storage';
import { Device } from '@ionic-native/device';
import { MediaCapture,CaptureVideoOptions,CaptureError, MediaFile } from '@ionic-native/media-capture';
import { File } from '@ionic-native/file';
import { Camera,CameraOptions } from '@ionic-native/camera';

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
constructor(public loadingCtrl:LoadingController,public zone : NgZone,private file: File,public camera: Camera, private mediaCapture: MediaCapture,private imagePicker: ImagePicker,public platform:Platform,public navCtrl: NavController, private datePicker: DatePicker,public navParams: NavParams) {


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
/*************Accessing multiple images from gallery**************/

  if(index==2){
        let options = {
        // maximumImagesCount: 8,
        // width: 500,
        // height: 500,
        quality: 100
        }

      this.imagePicker.getPictures(options).then((results) => {
          for (var i = 0; i < results.length; i++) {
              alert(JSON.stringify(results[i]));
          }
        }, (err) => {
          this.platform.ready().then(() => {
              window.plugins.toast.show(err, "long", "center");
          })
        });
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
              // firebase.storage().ref().child(`eventvideo/${name}`).put(blob).then((snapshot)=> {
              //   this.videourl=snapshot.downloadURL;
                loading.dismiss();
             // });
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
                    // firebase.storage().ref().child(`statusvideo/${name}`).put(blob).then((snapshot)=> {
                    //   this.videourl=snapshot.downloadURL;
                      loading.dismiss();

                  //  });
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
}
onChange(ev){

}
}

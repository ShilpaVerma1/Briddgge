import { Component,NgZone } from '@angular/core';
import { NavController, NavParams,Platform,PopoverController,ViewController,LoadingController } from 'ionic-angular';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Device } from '@ionic-native/device';
import { MediaCapture,CaptureVideoOptions,CaptureError, MediaFile } from '@ionic-native/media-capture';
import { File } from '@ionic-native/file';
import { AddeventinnerPage } from '../addeventinner/addeventinner';

declare var window: any;
@Component({
  selector: 'page-addeventspost',
  templateUrl: 'addeventspost.html',
})
export class AddeventspostPage {
  statustext:any;imgurl:any;
  apiurl:any;videourl:any;
  db:any;
  counts:any;
  constructor(private device: Device,private file: File,public platform:Platform,private storage: Storage,public http:Http,public viewCtrl:ViewController,db: AngularFireDatabase,public camera: Camera,public zone : NgZone,public navCtrl: NavController,public popoverCtrl: PopoverController, public navParams: NavParams) {
    this.apiurl='http://kanchan.mediaoncloud.com/briddgge/';
    this.db=db;
    
 }
imageupload(){
   let popover = this.popoverCtrl.create(ImagepopverPage,{
     captureid:1
   });
      popover.present({
              ev: ImagepopverPage
            });
        popover.onDidDismiss(data => {
          if(data){
            this.imgurl=data.imageurl;
          }
        })
}
videoupload(){
   let popover = this.popoverCtrl.create(ImagepopverPage,{
     captureid: 2
   });
      popover.present({
              ev: ImagepopverPage
            });
      popover.onDidDismiss(data => {
          if(data){
            this.videourl=data.videourl;
          }
      })
}
events(){
  this.navCtrl.push(AddeventinnerPage);
}
post(img,vid){
  this.storage.get('usrid').then((usrid)=>{
      if(img){
         this.http.get( this.apiurl+"saveStatus?user_id="+usrid+"&message="+this.statustext+"&img="+img).map(res => res.json()).subscribe(data => {
            if(data.status=='Success'){
              //alert('Status  updated successfully');
                var pid=data.id;
                this.counts = this.db.list('/Count/'+pid); 
                this.counts.push({ 
                      Likecount: 0,
                      Commentcount:0
                });
              this.platform.ready().then(() => {
                  window.plugins.toast.show("Status  updated successfully", "long", "center");
              }) 
              this.imgurl='';
            }else{
              //alert('Error while updating status');
              this.platform.ready().then(() => {
                  window.plugins.toast.show("Error while updating status", "long", "center");
              }) 
           }

          })
      }else if(vid){
       this.http.get( this.apiurl+"saveStatusVideo?user_id="+usrid+"&message="+this.statustext+"&video="+vid).map(res => res.json()).subscribe(data => {
            if(data.status=='Success'){
              //alert('Status  updated successfully');
              this.platform.ready().then(() => {
                  window.plugins.toast.show("Status  updated successfully", "long", "center");
              }) 
               var pid=data.id;
                this.counts = this.db.list('/Count/'+pid); 
                this.counts.push({ 
                      Likecount: 0,
                      Commentcount:0
                });
                this.videourl='';
            }else{
              //alert('Error while updating status');
              this.platform.ready().then(() => {
                  window.plugins.toast.show("Error while updating status", "long", "center");
              }) 
           }
          })
      }else if(!img && this.statustext && !vid){
          this.http.get( this.apiurl+"saveStatus?user_id="+usrid+"&message="+this.statustext).map(res => res.json()).subscribe(data => {        
            if(data.status=='Success'){
                //alert('Status updated successfully');
                this.platform.ready().then(() => {
                    window.plugins.toast.show("Status  updated successfully", "long", "center");
                }) 
                var pid=data.id;
                this.counts = this.db.list('/Count/'+pid); 
                this.counts.push({ 
                      Likecount: 0,
                      Commentcount:0
                });
                this.statustext='';
              }else{
                this.platform.ready().then(() => {
                    window.plugins.toast.show("Error while updating status", "long", "center");
                }) 
            }
          })
      }
      else{
       // alert('Something went wrong');
        this.platform.ready().then(() => {
           window.plugins.toast.show("Something went wrong", "long", "center");
        }) 
      }
    })
}

}

@Component({

  template: `
  <ion-row style="height: 192px;" >
  <img src="http://2.mediaoncloud.com/Shilpa/camera.png" class="camsrc" (click)="cameraupload()" style="margin: auto;display: block;width:100px;height:100px;"/>
  <span style="position: absolute;
    top: 146px;
    left: 36px;
    font-size: 17px;
    color: #fff;">Camera</span>
  <img src="http://2.mediaoncloud.com/Shilpa/gallery.png" class="gallerysrc" (click)="gallery()" style="margin: auto;display: block;width:100px;height:100px;"/>
  <span  style="position: absolute;
    top: 147px;
    right: 36px;
    font-size: 17px;
    color: #fff;
    ">Gallery</span>
  </ion-row>
`
})
export class ImagepopverPage {
captureDataUrl:any;imageurl:any;
captureidd:any;videourl:any;
MediaFile:any;
  constructor( private mediaCapture: MediaCapture,public navParams: NavParams,private file: File,public viewCtrl:ViewController,public loadingCtrl:LoadingController,public navCtrl: NavController,public zone : NgZone,public camera: Camera,) {
    this.captureidd=this.navParams.get('captureid');
  
  }
cameraupload(){
  if(this.captureidd==1){
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
          const imageRef = storagee.child(`statusimages/${filename}.jpg`);          
          let loading = this.loadingCtrl.create({
              spinner: 'ios',
              content: 'Uploading...',
          });
          loading.present(); 
          imageRef.putString(this.captureDataUrl,firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
              this.imageurl=snapshot.downloadURL;
              loading.dismiss();
                this.viewCtrl.dismiss({
                   imageurl: this.imageurl
                })
          })
          loading.dismiss();

          }, (err) => {
                console.log(err);
          });
       })  
   })
  }
  if(this.captureidd==2){
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
                    firebase.storage().ref().child(`statusvideo/${name}`).put(blob).then((snapshot)=> {
                      this.videourl=snapshot.downloadURL;
                      loading.dismiss();
                      this.viewCtrl.dismiss({
                        videourl: this.videourl
                      })

                    });
                };
                fileReader.readAsArrayBuffer(file);
              })
              }, (error) => {
                console.log('File Entry Error: ' + JSON.stringify(error));
              });
          
            },(err: CaptureError) => {
                alert(err);
            });
      })
    } 
}
gallery():Promise<any>{
if(this.captureidd==1){
 return new Promise((resolve)=>{   
 this.zone.run(()=>{ 

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
          const imageRef = storagee.child(`statusimages/${filename}.jpg`);          
          let loading = this.loadingCtrl.create({
              spinner: 'ios',
              content: 'Uploading...',
          });
          loading.present(); 
               imageRef.putString(this.captureDataUrl,firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
                 console.log(snapshot.downloadURL);
                 this.imageurl=snapshot.downloadURL
                 loading.dismiss();

                   this.viewCtrl.dismiss({
                      imageurl: this.imageurl
                    })
               })

          }, (err) => {
          console.log(err)
      });
    })
   })
  }
  if(this.captureidd==2){
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
              firebase.storage().ref().child(`statusvideo/${name}`).put(blob).then((snapshot)=> {
                this.videourl=snapshot.downloadURL;
                loading.dismiss();
                this.viewCtrl.dismiss({
                   videourl: this.videourl
                })

              });
          };
           fileReader.readAsArrayBuffer(file);
         }, (error) => {
           console.log('File Entry Error: ' + JSON.stringify(error));
         });
      }, (error) => {
        console.log('Error resolving file: ' + JSON.stringify(error));
      });  

          }, (err) => {
          alert(err)
      });
    })
    })
  }
 }
}

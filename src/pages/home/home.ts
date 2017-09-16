import { Component,ViewChild,NgZone } from '@angular/core';
import { NavController,ToastController,NavParams,AlertController,ActionSheetController,Platform} from 'ionic-angular';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MediaCapture,CaptureVideoOptions,CaptureError, MediaFile } from '@ionic-native/media-capture';
import * as firebase from 'firebase';
import { File } from '@ionic-native/file';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import 'rxjs/add/operator/take';
import { LoginPage } from '../login/login';

declare var window:any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {
captureDataUrl: string;  public recaptchaVerifier:firebase.auth.RecaptchaVerifier;

db:any;img:any;MediaFile:any;
items:any;selfieImage:any;
x:any;src:any;videos:any;fireAuth:any;

constructor(public zone : NgZone,public navParams: NavParams,private file: File,db: AngularFireDatabase,private mediaCapture: MediaCapture,public alertCtrl: AlertController,public toastCtrl:ToastController,public platform: Platform,public actionSheetCtrl: ActionSheetController,public camera: Camera,public navCtrl: NavController) {
 this.db=db;
 this.items = db.list('/items'); 
 this.fireAuth=firebase.auth();
     
  this.items.subscribe((data)=>{
    this.img=data;
    data.forEach(minispanshot =>{
            var keys = minispanshot.$key; 
          // console.log(keys);  
    })
  }) 
   
      this.items = db.list('/usrdata/');       
         this.items.subscribe((data)=>{
          console.log(data[0].$value);
         // console.log(data[1].$value);

        })
  
  // this.items.update('-KptVoELHYJbSIA-R--X',{
  //   name:'Apps'
  // })
  //  const usr = this.db.list('/users'); 
//  usr.push({ name: 'Shilpa' });
  }
test():Promise<any>{
 
 return new Promise((resolve, reject) => {
  var options: any = {
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      mediaType: this.camera.MediaType.ALLMEDIA,
      destinationType: this.camera.DestinationType.FILE_URI
  }
    this.camera.getPicture(options).then((fileUri: any) => {
     // alert('File URI: ' + JSON.stringify(fileUri));
      window.resolveLocalFileSystemURL('file://' + fileUri, (fileEntry) => {
       // alert('Type: ' + (typeof fileEntry));
         fileEntry.file( (file) => {
        //  alert('File: ' + (typeof file) + ', ' + JSON.stringify(file));
           let fileReader = new FileReader();         
           fileReader.onloadend= (result: any) => {
           alert('File Reader Result: ' + JSON.stringify(result));
             let arrayBuffer = result.target.result;
           //  alert(arrayBuffer);
             let blob = new Blob([new Uint8Array(arrayBuffer)], {type: 'video/mp4'});
             const name = '' + Date.now();
           // alert(blob);
             firebase.storage().ref().child(name).put(blob);
           };

           fileReader.onerror = (error: any) => {
             reject(error);
           };
           
           fileReader.readAsArrayBuffer(file);
         }, (error) => {
           console.log('File Entry Error: ' + JSON.stringify(error));
         });
      }, (error) => {
        console.log('Error resolving file: ' + JSON.stringify(error));
      });
    });
  });
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
uploadImage() {

          //  const imageRef = storagee.child(`videos/${filename}.mp4`);          
          //  imageRef.putString(this.captureDataUrl).then((snapshot)=> {
        // let promise = new Promise((res,rej) => {

        //   const filename = Math.floor(Date.now() / 1000);
        //     let fileName = filename + ".jpg";
        //     let uploadTask = firebase.storage().ref(fileName).putString('/storage/emulated/0/Pictures/Screenshots/Screenshot_20170715-120013.png');
        //     uploadTask.on('state_changed', function(snapshot) {
        //     }, function(error) {
        //         rej(error);
        //     }, function() {
        //     var downloadURL = uploadTask.snapshot.downloadURL;
        //         res(downloadURL);
        //         alert(downloadURL);
        //     });
        // });
 
}
/**********Capture audio  from camera***********/

audiorecord(){
 
    this.mediaCapture.captureAudio().then((data: MediaFile[]) => {
       this.MediaFile=data[0].fullPath;
       alert(this.MediaFile);
       window.resolveLocalFileSystemURL(this.MediaFile, (fileEntry) => {
         fileEntry.file( (file) => {
           let fileReader = new FileReader();         
           fileReader.onloadend= (result: any) => {
             let arrayBuffer = result.target.result;
             let blob = new Blob([new Uint8Array(arrayBuffer)], {type: 'audio/mpeg'});
             const name = '' + Date.now();
                 // alert(blob);
            firebase.storage().ref().child(name).put(blob).then((snapshot)=>{
             this.x=snapshot.downloadURL;
              this.videos = this.db.list('/items');
                        this.videos.push({ 
                            audiodownloadURL: this.x
              });
      
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
}
takePicture(key){

/******Accessing photos gallery with database query*******/   
if(key==0)  {
      this.camera.getPicture({
        quality : 95,
        sourceType : this.camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit : true,
        saveToPhotoAlbum: true,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,     
      }).then((data) => {
          this.img=data;
          this.captureDataUrl= 'data:image/jpeg;base64,' + data;
        
          let storagee = firebase.storage().ref();

          const filename = Math.floor(Date.now() / 1000);
          const imageRef = storagee.child(`pictures/${filename}.jpg`);          
          imageRef.putString(this.captureDataUrl,firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
            this.x=snapshot.downloadURL;
            console.log(snapshot);
            this.items.push({ 
              downloadURL: this.x
            });

      })
          }, (err) => {
          alert(err)
      });
}   

  /******Accessing  video library ******/
  if(key==1){
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
           // alert(blob);
            firebase.storage().ref().child(name).put(blob).then((snapshot)=> {
              this.x=snapshot.downloadURL;
              this.videos = this.db.list('/items');
                  this.videos.push({ 
                      videodownloadURL: this.x
                 });
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
  }
/******Accessing phone gallery *******/  
if(key==2){
      this.camera.getPicture({
          quality: 100,
          sourceType : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
          destinationType: this.camera.DestinationType.FILE_URI,
          mediaType: this.camera.MediaType.ALLMEDIA,
          saveToPhotoAlbum:true,   
      }).then((data) => {
          alert(data);
          }, (err) => {
          alert(err)
        });
}

/**********Capture video  from camera***********/
if(key==4){
let options: CaptureVideoOptions = { limit: 1 };
this.mediaCapture.captureVideo().then((data) => {
      //  this.storage.set('localurl',data[0].localURL),
      // this.storage.set('storpath',data[0].fullPath);
  //     alert(data[0].fullPath);
       this.MediaFile=data[0].fullPath;
     //  alert(this.MediaFile);
    //   alert(data[0].localURL);
       window.resolveLocalFileSystemURL(this.MediaFile, (fileEntry) => {
         fileEntry.file( (file) => {
           let fileReader = new FileReader();         
           fileReader.onloadend= (result: any) => {
             let arrayBuffer = result.target.result;
             let blob = new Blob([new Uint8Array(arrayBuffer)], {type: 'video/mp4'});
             const name = '' + Date.now();
                 // alert(blob);
            firebase.storage().ref().child(name).put(blob).then((snapshot)=>{
             this.x=snapshot.downloadURL;
              this.videos = this.db.list('/items');
                        this.videos.push({ 
                            videodownloadURL: this.x
                       });
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
    } 
}

/********Capture image from camera query*********/
capture() {
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
          const imageRef = storagee.child(`img/${filename}.jpg`);          
          imageRef.putString(this.captureDataUrl,firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
            this.x=snapshot.downloadURL;
            //console.log(snapshot);
            this.items.push({ 
              downloadURL: this.x
            });
            })
          }, (err) => {
                alert(err);
          });
       })  
   })
  }
  doLogout() {
   this.fireAuth.signOut();
   this.navCtrl.push(LoginPage);
  }
}

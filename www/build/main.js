webpackJsonp([0],{

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideossPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideossPage = (function () {
    function VideossPage(storage, http, popoverCtrl, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.http = http;
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.status = [];
        // var usrid=navParams.data;
        this.storage.get('usrid').then(function (usrid) {
            _this.http.get("http://kanchan.mediaoncloud.com/briddgge/fetchStatus?user_id=" + usrid).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
            });
        });
    }
    return VideossPage;
}());
VideossPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-videoss',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/videoss/videoss.html"*/'<ion-header>\n</ion-header>\n\n<ion-content style="position:relative;">\n<ion-row *ngFor="let vid of status" class="video-row">\n     <video  controls="controls" *ngIf="vid.video" controlsList="nodownload" >      \n              <source  [src]="vid.video" codecs="avc1.42E01E, mp4a.40.2" /> \n      </video>\n        <!--<video  controls="controls"  controlsList="nodownload" >      \n              <source  src="img/vid.mp4" codecs="avc1.42E01E, mp4a.40.2" /> \n      </video>\n         <video  controls="controls"  controlsList="nodownload" >      \n              <source  src="img/vid1.mp4" codecs="avc1.42E01E, mp4a.40.2" /> \n      </video>\n         <video  controls="controls"  controlsList="nodownload" >      \n              <source  src="img/vid.mp4" codecs="avc1.42E01E, mp4a.40.2" /> \n      </video>\n         <video  controls="controls"  controlsList="nodownload" >      \n              <source  src="img/vid1.mp4" codecs="avc1.42E01E, mp4a.40.2" /> \n      </video>\n         <video  controls="controls"  controlsList="nodownload">      \n              <source  src="img/vid.mp4" codecs="avc1.42E01E, mp4a.40.2" /> \n      </video>\n           <video  controls="controls"  controlsList="nodownload" >      \n              <source  src="img/vid1.mp4" codecs="avc1.42E01E, mp4a.40.2" /> \n      </video>\n         <video  controls="controls"  controlsList="nodownload">      \n              <source  src="img/vid.mp4" codecs="avc1.42E01E, mp4a.40.2" /> \n      </video>-->\n    </ion-row>\n   \n\n</ion-content>'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/videoss/videoss.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], VideossPage);

//# sourceMappingURL=videoss.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImagessPage = (function () {
    function ImagessPage(storage, http, navCtrl, popoverCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.http = http;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.navParams = navParams;
        this.status = [];
        //  var usrid=navParams.data;
        this.storage.get('usrid').then(function (usrid) {
            _this.http.get("http://kanchan.mediaoncloud.com/briddgge/fetchStatus?user_id=" + usrid).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
            });
        });
    }
    return ImagessPage;
}());
ImagessPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-imagess',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/imagess/imagess.html"*/'<ion-header>\n</ion-header>\n\n<ion-content style="position:relative;">\n<span class="video-row" *ngFor="let imgs of status">\n    <img *ngIf="imgs.img" [src]="imgs.img"/>\n       <!--<img src="img/video-img2.jpg"/>\n          <img src="img/video-img3.jpg"/>\n              <img src="img/video-img2.jpg"/>\n       <img src="img/video-img3.jpg"/>\n          <img src="img/video-img3.jpg"/>\n                   <img src="img/video-img3.jpg"/>\n       <img src="img/video-img2.jpg"/>\n          <img src="img/video-img3.jpg"/>-->\n</span>\n\n</ion-content>'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/imagess/imagess.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ImagessPage);

//# sourceMappingURL=imagess.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__briddggehome_briddggehome__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__likestab_likestab__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__commenttab_commenttab__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CommentsPage = (function () {
    function CommentsPage(db, navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__likestab_likestab__["a" /* LikestabPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__commenttab_commenttab__["a" /* CommenttabPage */];
        this.db = db;
        this.postid = this.navParams.get('postid');
        this.postimg = this.navParams.get('postimg');
        this.postmsg = this.navParams.get('postmsg');
        this.postusrname = this.navParams.get('postusrname');
        this.profilepic = this.navParams.get('profilepic');
        this.postvideo = this.navParams.get('postvideo');
        // this.http.get("http://kanchan.mediaoncloud.com/briddgge/fetchStatusInner?post_id="+this.postid).map(res => res.json()).subscribe(data => {
        //   this.commentcount=data.countComment;
        //   this.likecount=data.likes;
        // })
        var refNew = this.db.list('/Count/' + this.postid);
        refNew.subscribe(function (data) {
            _this.afstatus = data;
        });
    }
    CommentsPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__briddggehome_briddggehome__["a" /* BriddggeHomePage */]);
    };
    return CommentsPage;
}());
CommentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-comments',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/comments/comments.html"*/'<ion-header>\n	<ion-navbar hideBackButton="true">\n		 <ion-icon name="arrow-round-back" (click)="back()" style="font-size: 2.0em; color: #fff;margin: 5px;"></ion-icon>\n  	</ion-navbar>\n</ion-header>\n<ion-content>\n<ion-row class="post-heading">\n		<img [src]="profilepic" /><h5>{{postusrname}}</h5>\n		</ion-row>\n		<ion-row class="post-inner">\n			<p></p>\n			<img *ngIf="postimg!=null &&(postimg!=\'\')" [src]="postimg" />\n		<video  *ngIf="postvideo!=null" controls="controls" width="100%" height="180"  [src]="postvideo"   controlsList="nodownload"></video>\n      <p *ngIf="postmsg!=\'undefined\'">{{postmsg}} </p>\n</ion-row>\n  <span class="share-logo"> <ion-icon class="share-alt" name="share-alt"></ion-icon></span>\n  <ion-tabs style="position:relative;height:60%;margin-top: 5px;">\n		<ion-tab [root]="tab1Root" tabBadge="{{afstatus[0].Likecount}}" tabIcon="md-thumbs-up" [rootParams]="postid"></ion-tab>\n		<ion-tab [root]="tab2Root " tabIcon="md-chatbubbles" tabBadge="{{afstatus[0].Commentcount}}" [rootParams]="postid"></ion-tab>\n	</ion-tabs>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/comments/comments.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
], CommentsPage);

//# sourceMappingURL=comments.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddeventspostPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ImagepopverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_media_capture__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__addeventinner_addeventinner__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AddeventspostPage = (function () {
    function AddeventspostPage(device, file, platform, storage, http, viewCtrl, db, camera, zone, navCtrl, popoverCtrl, navParams) {
        this.device = device;
        this.file = file;
        this.platform = platform;
        this.storage = storage;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.navParams = navParams;
        this.apiurl = 'http://kanchan.mediaoncloud.com/briddgge/';
        this.db = db;
    }
    AddeventspostPage.prototype.imageupload = function () {
        var _this = this;
        var popover = this.popoverCtrl.create(ImagepopverPage, {
            captureid: 1
        });
        popover.present({
            ev: ImagepopverPage
        });
        popover.onDidDismiss(function (data) {
            if (data) {
                _this.imgurl = data.imageurl;
            }
        });
    };
    AddeventspostPage.prototype.videoupload = function () {
        var _this = this;
        var popover = this.popoverCtrl.create(ImagepopverPage, {
            captureid: 2
        });
        popover.present({
            ev: ImagepopverPage
        });
        popover.onDidDismiss(function (data) {
            if (data) {
                _this.videourl = data.videourl;
            }
        });
    };
    AddeventspostPage.prototype.events = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__addeventinner_addeventinner__["a" /* AddeventinnerPage */]);
    };
    AddeventspostPage.prototype.post = function (img, vid) {
        var _this = this;
        this.storage.get('usrid').then(function (usrid) {
            if (img) {
                _this.http.get(_this.apiurl + "saveStatus?user_id=" + usrid + "&message=" + _this.statustext + "&img=" + img).map(function (res) { return res.json(); }).subscribe(function (data) {
                    if (data.status == 'Success') {
                        //alert('Status  updated successfully');
                        var pid = data.id;
                        _this.counts = _this.db.list('/Count/' + pid);
                        _this.counts.push({
                            Likecount: 0,
                            Commentcount: 0
                        });
                        _this.platform.ready().then(function () {
                            window.plugins.toast.show("Status  updated successfully", "long", "center");
                        });
                        _this.imgurl = '';
                    }
                    else {
                        //alert('Error while updating status');
                        _this.platform.ready().then(function () {
                            window.plugins.toast.show("Error while updating status", "long", "center");
                        });
                    }
                });
            }
            else if (vid) {
                _this.http.get(_this.apiurl + "saveStatusVideo?user_id=" + usrid + "&message=" + _this.statustext + "&video=" + vid).map(function (res) { return res.json(); }).subscribe(function (data) {
                    if (data.status == 'Success') {
                        //alert('Status  updated successfully');
                        _this.platform.ready().then(function () {
                            window.plugins.toast.show("Status  updated successfully", "long", "center");
                        });
                        var pid = data.id;
                        _this.counts = _this.db.list('/Count/' + pid);
                        _this.counts.push({
                            Likecount: 0,
                            Commentcount: 0
                        });
                        _this.videourl = '';
                    }
                    else {
                        //alert('Error while updating status');
                        _this.platform.ready().then(function () {
                            window.plugins.toast.show("Error while updating status", "long", "center");
                        });
                    }
                });
            }
            else if (!img && _this.statustext && !vid) {
                _this.http.get(_this.apiurl + "saveStatus?user_id=" + usrid + "&message=" + _this.statustext).map(function (res) { return res.json(); }).subscribe(function (data) {
                    if (data.status == 'Success') {
                        //alert('Status updated successfully');
                        _this.platform.ready().then(function () {
                            window.plugins.toast.show("Status  updated successfully", "long", "center");
                        });
                        var pid = data.id;
                        _this.counts = _this.db.list('/Count/' + pid);
                        _this.counts.push({
                            Likecount: 0,
                            likedislikevar: 0,
                            Commentcount: 0
                        });
                        _this.statustext = '';
                    }
                    else {
                        _this.platform.ready().then(function () {
                            window.plugins.toast.show("Error while updating status", "long", "center");
                        });
                    }
                });
            }
            else {
                // alert('Something went wrong');
                _this.platform.ready().then(function () {
                    window.plugins.toast.show("Something went wrong", "long", "center");
                });
            }
        });
    };
    return AddeventspostPage;
}());
AddeventspostPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-addeventspost',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/addeventspost/addeventspost.html"*/'\n<ion-header>\n\n <ion-navbar hideBackButton>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" style="color:#fff;font-size:30px;"></ion-icon>\n    </button>\n        <ion-title>Add Activities</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <ion-textarea type="text" placeholder="Write your message here" [(ngModel)]="statustext" ></ion-textarea>\n          <ion-row class="center-img"> \n            <ion-col col-40 class="colicon" style="background:url(\'img/events-bg.png\')!important;" (click)="events()"><img src="img/events.png" />\n          <a  >Events</a></ion-col>\n            <ion-col col-40 class="colicon" style="background:url(\'img/images-bg.png\')!important;" (click)="imageupload()"><img src="img/images.png"  />\n            <a  class="heading-under">Images</a></ion-col>\n        </ion-row>\n                <ion-row class="center-row">\n            <ion-col col-40 class="colicon" style="background:url(\'img/live-video-bg.png\')!important;"><img src="img/live-video.png" />\n                <a  >Live video</a></ion-col>\n            <ion-col col-40 class="colicon" style="background:url(\'img/video-bg.png\')!important;" (click)="videoupload()" ><img src="img/video.png"  />\n           <a  class="heading-under">Videos</a></ion-col>\n        </ion-row>\n    <ion-row>\n        <button ion-button round outline class="post-btn" (click)="post(imgurl,videourl)">Post</button>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/addeventspost/addeventspost.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], AddeventspostPage);

var ImagepopverPage = (function () {
    function ImagepopverPage(mediaCapture, navParams, file, viewCtrl, loadingCtrl, navCtrl, zone, camera) {
        this.mediaCapture = mediaCapture;
        this.navParams = navParams;
        this.file = file;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.camera = camera;
        this.captureidd = this.navParams.get('captureid');
    }
    ImagepopverPage.prototype.cameraupload = function () {
        var _this = this;
        if (this.captureidd == 1) {
            return new Promise(function (resolve) {
                var options = {
                    quality: 95,
                    allowEdit: true,
                    saveToPhotoAlbum: true,
                    destinationType: _this.camera.DestinationType.DATA_URL,
                    encodingType: _this.camera.EncodingType.JPEG,
                    sourceType: _this.camera.PictureSourceType.CAMERA,
                };
                _this.zone.run(function () {
                    _this.camera.getPicture(options).then(function (imageData) {
                        var storagee = __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref();
                        _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
                        var filename = Math.floor(Date.now() / 1000);
                        var imageRef = storagee.child("statusimages/" + filename + ".jpg");
                        var loading = _this.loadingCtrl.create({
                            spinner: 'ios',
                            content: 'Uploading...',
                        });
                        loading.present();
                        imageRef.putString(_this.captureDataUrl, __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"].StringFormat.DATA_URL).then(function (snapshot) {
                            _this.imageurl = snapshot.downloadURL;
                            loading.dismiss();
                            _this.viewCtrl.dismiss({
                                imageurl: _this.imageurl
                            });
                        });
                        loading.dismiss();
                    }, function (err) {
                        console.log(err);
                    });
                });
            });
        }
        if (this.captureidd == 2) {
            return new Promise(function (resolve) {
                var options = { limit: 1 };
                _this.mediaCapture.captureVideo().then(function (data) {
                    _this.MediaFile = data[0].fullPath;
                    window.resolveLocalFileSystemURL(_this.MediaFile, function (fileEntry) {
                        fileEntry.file(function (file) {
                            var fileReader = new FileReader();
                            fileReader.onloadend = function (result) {
                                var arrayBuffer = result.target.result;
                                var blob = new Blob([new Uint8Array(arrayBuffer)], { type: 'video/mp4' });
                                var name = '' + Date.now();
                                var loading = _this.loadingCtrl.create({
                                    spinner: 'ios',
                                    content: 'Uploading...',
                                });
                                loading.present();
                                __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child("statusvideo/" + name).put(blob).then(function (snapshot) {
                                    _this.videourl = snapshot.downloadURL;
                                    loading.dismiss();
                                    _this.viewCtrl.dismiss({
                                        videourl: _this.videourl
                                    });
                                });
                            };
                            fileReader.readAsArrayBuffer(file);
                        });
                    }, function (error) {
                        console.log('File Entry Error: ' + JSON.stringify(error));
                    });
                }, function (err) {
                    alert(err);
                });
            });
        }
    };
    ImagepopverPage.prototype.gallery = function () {
        var _this = this;
        if (this.captureidd == 1) {
            return new Promise(function (resolve) {
                _this.zone.run(function () {
                    _this.camera.getPicture({
                        quality: 95,
                        sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                        allowEdit: true,
                        saveToPhotoAlbum: true,
                        destinationType: _this.camera.DestinationType.DATA_URL,
                        encodingType: _this.camera.EncodingType.JPEG,
                    }).then(function (data) {
                        _this.captureDataUrl = 'data:image/jpeg;base64,' + data;
                        var storagee = __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref();
                        var filename = Math.floor(Date.now() / 1000);
                        var imageRef = storagee.child("statusimages/" + filename + ".jpg");
                        var loading = _this.loadingCtrl.create({
                            spinner: 'ios',
                            content: 'Uploading...',
                        });
                        loading.present();
                        imageRef.putString(_this.captureDataUrl, __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"].StringFormat.DATA_URL).then(function (snapshot) {
                            console.log(snapshot.downloadURL);
                            _this.imageurl = snapshot.downloadURL;
                            loading.dismiss();
                            _this.viewCtrl.dismiss({
                                imageurl: _this.imageurl
                            });
                        });
                    }, function (err) {
                        console.log(err);
                    });
                });
            });
        }
        if (this.captureidd == 2) {
            return new Promise(function (resolve) {
                _this.zone.run(function () {
                    _this.camera.getPicture({
                        quality: 95,
                        destinationType: _this.camera.DestinationType.FILE_URI,
                        sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                        mediaType: _this.camera.MediaType.VIDEO
                    }).then(function (videouri) {
                        _this.captureDataUrl = videouri;
                        var storagee = __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref();
                        window.resolveLocalFileSystemURL('file://' + videouri, function (fileEntry) {
                            fileEntry.file(function (file) {
                                var fileReader = new FileReader();
                                fileReader.onloadend = function (result) {
                                    var arrayBuffer = result.target.result;
                                    var blob = new Blob([new Uint8Array(arrayBuffer)], { type: 'video/mp4' });
                                    var name = '' + Date.now();
                                    var loading = _this.loadingCtrl.create({
                                        spinner: 'ios',
                                        content: 'Uploading...',
                                    });
                                    loading.present();
                                    __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child("statusvideo/" + name).put(blob).then(function (snapshot) {
                                        _this.videourl = snapshot.downloadURL;
                                        loading.dismiss();
                                        _this.viewCtrl.dismiss({
                                            videourl: _this.videourl
                                        });
                                    });
                                };
                                fileReader.readAsArrayBuffer(file);
                            }, function (error) {
                                console.log('File Entry Error: ' + JSON.stringify(error));
                            });
                        }, function (error) {
                            console.log('Error resolving file: ' + JSON.stringify(error));
                        });
                    }, function (err) {
                        alert(err);
                    });
                });
            });
        }
    };
    return ImagepopverPage;
}());
ImagepopverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n  <ion-row style=\"height: 192px;\" >\n  <img src=\"http://2.mediaoncloud.com/Shilpa/camera.png\" class=\"camsrc\" (click)=\"cameraupload()\" style=\"margin: auto;display: block;width:100px;height:100px;\"/>\n  <span style=\"position: absolute;\n    top: 146px;\n    left: 36px;\n    font-size: 17px;\n    color: #fff;\">Camera</span>\n  <img src=\"http://2.mediaoncloud.com/Shilpa/gallery.png\" class=\"gallerysrc\" (click)=\"gallery()\" style=\"margin: auto;display: block;width:100px;height:100px;\"/>\n  <span  style=\"position: absolute;\n    top: 147px;\n    right: 36px;\n    font-size: 17px;\n    color: #fff;\n    \">Gallery</span>\n  </ion-row>\n"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_media_capture__["a" /* MediaCapture */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
], ImagepopverPage);

//# sourceMappingURL=addeventspost.js.map

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 205;

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 248;

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindfriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__briddggehome_briddggehome__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FindfriendsPage = (function () {
    function FindfriendsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FindfriendsPage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    FindfriendsPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__briddggehome_briddggehome__["a" /* BriddggeHomePage */]);
    };
    return FindfriendsPage;
}());
FindfriendsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-findfriends',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/findfriends/findfriends.html"*/'\n<ion-header>\n\n <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" style="color:#fff;font-size:30px;"></ion-icon>\n    </button>\n        <ion-title>Find Friends</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-searchbar  style="width:100%;" placeholder="Search Friends" autocorrect="off"></ion-searchbar>\n\n<ion-scroll scrollX="true" class="first-scroll top-scroll" style="height:100px;">\n    <ion-card>\n      <img src="img/profile-img.jpg" />\n      <a>Lorem ipsam</a>\n    </ion-card>\n    <ion-card>\n   <img src="img/profile-img.jpg" />\n      <a>Lorem ipsam</a>\n    </ion-card>\n    <ion-card>\n <img src="img/profile-img.jpg" />\n      <a>Lorem ipsam</a>\n    </ion-card>\n    <ion-card>\n   <img src="img/profile-img.jpg" />\n      <a>Lorem ipsam</a>\n    </ion-card>\n    <ion-card>\n<img src="img/profile-img.jpg" />\n      <a>Lorem ipsam</a>\n    </ion-card>\n    <ion-card>\n  <img src="img/profile-img.jpg" />\n    <a>Lorem ipsam</a>\n    </ion-card>\n  </ion-scroll>\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n<p class="next">  \n    <!--<ion-icon ios="ios-send" md="md-send"></ion-icon>-->\n    <button ion-button  outline round>Follow</button>\n</p>\n</ion-row>\n\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n   <p class="next">  \n         <button ion-button  outline round>Follow</button>\n    </p>\n</ion-row>\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n   <p class="next"> \n        <button ion-button  outline round>Follow</button>\n  </p>\n</ion-row>\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n   <p class="next">  \n           <button ion-button  outline round>Follow</button>\n  </p>\n</ion-row>\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n   <p class="next">  \n        <button ion-button  outline round>Follow</button>\n    </p>\n</ion-row>\n<ion-footer class="bottom-footer">\n     <ion-icon ios="ios-home" md="md-home" (click)="home()"></ion-icon>\n       <ion-icon ios="ios-search" md="md-search"></ion-icon>\n       <ion-icon ios="ios-heart" md="md-heart"></ion-icon>\n        <ion-icon ios="ios-person" md="md-person" (click)="profile()"></ion-icon>\n    </ion-footer>\n</ion-content>\n'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/findfriends/findfriends.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], FindfriendsPage);

//# sourceMappingURL=findfriends.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageshomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comments_comments__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ImageshomePage = (function () {
    function ImageshomePage(app, db, storage, http, navCtrl, navParams) {
        var _this = this;
        this.app = app;
        this.storage = storage;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.status = [];
        this.db = db;
        this.storage.get('usrid').then(function (usrid) {
            _this.http.get("http://kanchan.mediaoncloud.com/briddgge/fetchStatusAll?user_id=" + usrid).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
            });
        });
        var refNew = this.db.list('/Count/', { query: {
                orderByChild: 'key'
            } }).map(function (array) { return array.reverse(); });
        refNew.subscribe(function (data) {
            var rawList = [];
            _this.afstatus = [];
            data.forEach(function (minispanshot) {
                var refVal = minispanshot.$key;
                var refNew = _this.db.list('/Count/' + refVal);
                refNew.subscribe(function (dataInner) {
                    var newData = dataInner[0];
                    rawList[refVal] = newData;
                    _this.afstatus = rawList;
                });
            });
        });
    }
    ImageshomePage.prototype.Comments = function (postid, postimg, postmsg, usrname, profileimg) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__comments_comments__["a" /* CommentsPage */], {
            postid: postid,
            postimg: postimg,
            postmsg: postmsg,
            postusrname: usrname,
            profilepic: profileimg
        });
    };
    ImageshomePage.prototype.like = function (afcount, afkey, index, pid) {
        var _this = this;
        var newcount = JSON.parse(afcount) + 1;
        this.status[index].likeStatus = true;
        this.storage.get('usrid').then(function (usrid) {
            _this.http.get("http://kanchan.mediaoncloud.com/briddgge/likeStatus?user_id=" + usrid + "&post_id=" + pid + "&likeStatus=1").map(function (res) { return res.json(); }).subscribe(function (data) {
            });
        });
        var ref = this.db.list('/Count/' + pid);
        ref.update(afkey, {
            Likecount: newcount,
        });
    };
    ImageshomePage.prototype.unlike = function (afcount, afkey, index, pid) {
        var _this = this;
        var newcount = JSON.parse(afcount) - 1;
        this.status[index].likeStatus = false;
        this.storage.get('usrid').then(function (usrid) {
            _this.http.get("http://kanchan.mediaoncloud.com/briddgge/likeStatus?user_id=" + usrid + "&post_id=" + pid + "&likeStatus=0").map(function (res) { return res.json(); }).subscribe(function (data) {
            });
        });
        var ref = this.db.list('/Count/' + pid);
        ref.update(afkey, {
            Likecount: newcount,
        });
    };
    ImageshomePage.prototype.likepost = function (postid, postimg, postmsg, usrname, profileimg) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__comments_comments__["a" /* CommentsPage */], {
            postid: postid,
            postimg: postimg,
            postmsg: postmsg,
            postusrname: usrname,
            profilepic: profileimg,
        });
    };
    return ImageshomePage;
}());
ImageshomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-imageshome',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/imageshome/imageshome.html"*/'<ion-header>\n\n</ion-header>\n<ion-content padding>\n<div *ngIf="status.length!=undefined">\n	<div *ngFor="let post of status;let i=index;">\n			<ion-row *ngIf="post.message!=\'undefined\' || (post.img!=null)" class="post-heading">\n			<img  *ngIf="post.profile_img!=\'null\'" [src]="post.profile_img" /><h5>{{post.name}}</h5>\n			</ion-row>\n\n			<ion-row class="post-inner">\n				<p *ngIf="post.message!=\'undefined\'">{{post.message}}</p>\n				<img *ngIf="post.img" [src]="post.img"/>\n			</ion-row>\n			<ion-row class="post-comments" *ngIf="post.message!=\'undefined\' || (post.img!=null)">\n				<a><ion-icon name="ios-chatboxes-outline" (click)="Comments(post.id,post.img,post.message,post.name,post.profile_img)"></ion-icon> <span class="count">{{afstatus[post.id].Commentcount}}</span></a>\n				<a>  \n				<ion-icon name="heart-outline" *ngIf="post.likeStatus==false" (click)="like(afstatus[post.id].Likecount,afstatus[post.id].$key,i,post.id)"></ion-icon> \n				<ion-icon style="color:red;" md="md-heart" *ngIf="post.likeStatus==true" (click)="unlike(afstatus[post.id].Likecount,afstatus[post.id].$key,i,post.id)"></ion-icon> \n				<span class="count" (click)="likepost(post.id,post.img,post.message,post.name,post.profile_img)"></span>{{afstatus[post.id].Likecount}}	</a>\n			</ion-row>\n	</div>\n</div>\n<div *ngIf="status.length==undefined">\n	Enjoy posting your first story\n</div>\n\n</ion-content>'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/imageshome/imageshome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ImageshomePage);

//# sourceMappingURL=imageshome.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikestabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__otherprofile_otherprofile__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LikestabPage = (function () {
    function LikestabPage(app, http, storage, navCtrl, navParams) {
        var _this = this;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.likesdata = [];
        this.statusid = navParams.data;
        this.storage.get('usrid').then(function (usrid) {
            _this.http.get("http://kanchan.mediaoncloud.com/briddgge/fetchStatusInner?post_id=" + _this.statusid + "&user_id=" + usrid).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.likesdata = data.likesArray;
            });
        });
    }
    LikestabPage.prototype.view = function (id) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__otherprofile_otherprofile__["a" /* OtherprofilePage */], {
            otheruserid: id
        });
    };
    return LikestabPage;
}());
LikestabPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-likestab',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/likestab/likestab.html"*/'\n\n\n<ion-content >\n     \n<ion-row class="tiles" *ngFor="let post of likesdata;let i=index;">\n   <img [src]="post.profile_img"/>\n   <p class="name">{{post.name}}</p>\n<p class="next">  \n    <button ion-button (click)="view(post.user_id)" class="btn-follow" >View profile</button>\n</p>\n</ion-row>\n\n</ion-content>'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/likestab/likestab.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], LikestabPage);

//# sourceMappingURL=likestab.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imagessother_imagessother__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__videossother_videossother__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OtherprofilePage = (function () {
    function OtherprofilePage(http, navCtrl, navParams) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__imagessother_imagessother__["a" /* ImagessotherPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__videossother_videossother__["a" /* VideossotherPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__videossother_videossother__["a" /* VideossotherPage */];
        this.profiledata = [];
        this.uid = this.navParams.get('otheruserid');
        this.http.get("http://kanchan.mediaoncloud.com/briddgge/getProfile?user_id=" + this.uid).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.profiledata = data;
        });
    }
    return OtherprofilePage;
}());
OtherprofilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-otherprofile',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/otherprofile/otherprofile.html"*/'<ion-header>\n\n  <ion-navbar>\n   \n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n\n<ion-row class="top-profile">\n<img src="img/backprofile.jpg"/> \n<p class="triangle"></p></ion-row>\n\n <img class="pro-img"  [src]="profiledata.img" />\n  <h1 class="main-heading"> \n   <span class="span-heading">{{profiledata.name}}</span><br/>\n    <span class="span-heading2"> {{profiledata.user_type}}  </span>\n     <button class="follow-btn">  <ion-icon ios="ios-person" md="md-person"></ion-icon>65</button>\n  </h1>\n\n<ion-row class="background-div">\n  </ion-row>\n\n\n <ion-tabs style="position:relative;height:60%;">\n  <ion-tab [root]="tab1Root" tabTitle="Images"  [rootParams]="uid"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="videos" [rootParams]="uid"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Tag-posts"></ion-tab>\n\n</ion-tabs>\n\n\n</ion-content>'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/otherprofile/otherprofile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], OtherprofilePage);

//# sourceMappingURL=otherprofile.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagessotherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImagessotherPage = (function () {
    function ImagessotherPage(storage, http, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.status = [];
        var usrid = navParams.data;
        this.http.get("http://kanchan.mediaoncloud.com/briddgge/fetchStatus?user_id=" + usrid).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.status = data;
        });
    }
    return ImagessotherPage;
}());
ImagessotherPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-imagessother',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/imagessother/imagessother.html"*/'<ion-header>\n</ion-header>\n\n<ion-content style="position:relative;">\n<span class="video-row" *ngFor="let imgs of status">\n    <img *ngIf="imgs.img" [src]="imgs.img"/>\n       <!--<img src="img/video-img2.jpg"/>\n          <img src="img/video-img3.jpg"/>\n              <img src="img/video-img2.jpg"/>\n       <img src="img/video-img3.jpg"/>\n          <img src="img/video-img3.jpg"/>\n                   <img src="img/video-img3.jpg"/>\n       <img src="img/video-img2.jpg"/>\n          <img src="img/video-img3.jpg"/>-->\n</span>\n\n</ion-content>'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/imagessother/imagessother.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ImagessotherPage);

//# sourceMappingURL=imagessother.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideossotherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideossotherPage = (function () {
    function VideossotherPage(storage, http, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.status = [];
        var usrid = navParams.data;
        this.http.get("http://kanchan.mediaoncloud.com/briddgge/fetchStatus?user_id=" + usrid).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.status = data;
        });
    }
    return VideossotherPage;
}());
VideossotherPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-videossother',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/videossother/videossother.html"*/'<ion-header>\n</ion-header>\n\n<ion-content class="main-div" style="position:relative;">\n<ion-row *ngFor="let vid of status" class="video-row">\n     <video  controls="controls" *ngIf="vid.video" controlsList="nodownload" >      \n              <source  [src]="vid.video" codecs="avc1.42E01E, mp4a.40.2" /> \n      </video>\n\n    </ion-row>\n   \n\n</ion-content>'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/videossother/videossother.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], VideossotherPage);

//# sourceMappingURL=videossother.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommenttabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommenttabPage = (function () {
    function CommenttabPage(platform, db, http, storage, navCtrl, navParams) {
        var _this = this;
        this.platform = platform;
        this.http = http;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commentdata = [];
        this.statusid = navParams.data;
        this.db = db;
        this.storage.get('usrid').then(function (usrid) {
            _this.http.get("http://kanchan.mediaoncloud.com/briddgge/fetchStatusInner?post_id=" + _this.statusid + "&user_id=" + usrid).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.commentdata = data.comment;
            });
        });
        var refNew = this.db.list('/Count/' + this.statusid);
        refNew.subscribe(function (data) {
            _this.afstatus = data;
        });
        var ref = this.db.list('/Commentlikes/', { query: {
                orderByChild: 'key'
            } }).map(function (array) { return array.reverse(); });
        ref.subscribe(function (data) {
            var rawlist = [];
            _this.afstatus1 = [];
            data.forEach(function (minispanshot) {
                var refval = minispanshot.$key;
                var refNew = _this.db.list('/Commentlikes/' + refval);
                refNew.subscribe(function (dataInner) {
                    var newData = dataInner[0];
                    rawlist[refval] = newData;
                    _this.afstatus1 = rawlist;
                });
            });
        });
    }
    CommenttabPage.prototype.send = function (afcount, afkey) {
        var _this = this;
        this.storage.get('usrid').then(function (usrid) {
            _this.http.get("http://kanchan.mediaoncloud.com/briddgge/saveComment?user_id=" + usrid + "&post_id=" + _this.statusid + "&comment=" + _this.commenttext).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data.status == 'Success') {
                    var newcommentcount = JSON.parse(afcount) + 1;
                    var ref = _this.db.list('/Count/' + _this.statusid);
                    ref.update(afkey, {
                        Commentcount: newcommentcount
                    });
                    var commentid = data.id;
                    _this.counts = _this.db.list('/Commentlikes/' + commentid);
                    _this.counts.push({
                        Likes: 0,
                    });
                    _this.platform.ready().then(function () {
                        window.plugins.toast.show("Comments posted", "short", "center");
                    });
                    _this.commenttext = '';
                    _this.storage.get('usrid').then(function (usrid) {
                        _this.http.get("http://kanchan.mediaoncloud.com/briddgge/fetchStatusInner?post_id=" + _this.statusid + "&user_id=" + usrid).map(function (res) { return res.json(); }).subscribe(function (data) {
                            _this.commentdata = data.comment;
                        });
                    });
                }
                else {
                    _this.platform.ready().then(function () {
                        window.plugins.toast.show("Write your comment in commentbox", "short", "center");
                    });
                }
            });
        });
    };
    CommenttabPage.prototype.like = function (afcount, afkey, index, pid) {
        var _this = this;
        var newcount = JSON.parse(afcount) + 1;
        this.commentdata[index].likeStatus = true;
        this.storage.get('usrid').then(function (usrid) {
            _this.http.get("http://kanchan.mediaoncloud.com/briddgge/likeComment?user_id=" + usrid + "&comment_id=" + pid + "&likesComment=1").map(function (res) { return res.json(); }).subscribe(function (data) {
            });
        });
        var ref = this.db.list('/Commentlikes/' + pid);
        ref.update(afkey, {
            Likes: newcount,
        });
    };
    CommenttabPage.prototype.unlike = function (afcount, afkey, index, pid) {
        var _this = this;
        var newcount = JSON.parse(afcount) - 1;
        this.commentdata[index].likeStatus = false;
        this.storage.get('usrid').then(function (usrid) {
            _this.http.get("http://kanchan.mediaoncloud.com/briddgge/likeComment?user_id=" + usrid + "&comment_id=" + pid + "&likesComment=0").map(function (res) { return res.json(); }).subscribe(function (data) {
            });
        });
        var ref = this.db.list('/Commentlikes/' + pid);
        ref.update(afkey, {
            Likes: newcount,
        });
    };
    return CommenttabPage;
}());
CommenttabPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-commenttab',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/commenttab/commenttab.html"*/'<ion-content >\n<p *ngIf="commentdata==null">Post your comment here</p>\n\n<ion-row class="comment" *ngFor="let post of commentdata;let i=index;">\n  <img [src]="post.profile_img"/>\n  <p class="heading">{{post.name}}</p> \n  <p class="comments">{{post.comment}}</p>\n<ul>\n \n <li><a href="#"> <ion-icon class="comment-icon" md="ios-time"></ion-icon>10:30AM</a></li>\n    <li><a href="#"> \n        <ion-icon class="comment-icon" *ngIf="post.likeStatus==false" name="thumbs-up" (click)=like(afstatus1[post.id].Likes,afstatus1[post.id].$key,i,post.id)></ion-icon>\n        <ion-icon class="comment-icon" style="color:#2370b5;" *ngIf="post.likeStatus==true" name="thumbs-up" (click)=unlike(afstatus1[post.id].Likes,afstatus1[post.id].$key,i,post.id)></ion-icon>\n  {{afstatus1[post.id].Likes}}    </a></li>\n   </ul>\n    </ion-row>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-input class="reply" type="text" placeholder="Write your message..." [(ngModel)]="commenttext"></ion-input>\n      <button ion-button (click)="send(afstatus[0].Commentcount,afstatus[0].$key)">Send</button>\n  </ion-row>\n\n    </ion-footer>\n\n<!--\n            <ion-icon class="comment-icon" *ngIf="post.likeStatus==false" name="thumbs-up" (click)=like(post.likes_comment,i,post.id)></ion-icon>\n        <ion-icon class="comment-icon" style="color:#2370b5;" *ngIf="post.likeStatus==true" name="thumbs-up" (click)=unlike(post.likes_comment,i,post.id)></ion-icon>-->\n'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/commenttab/commenttab.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], CommenttabPage);

//# sourceMappingURL=commenttab.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoshomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comments_comments__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VideoshomePage = (function () {
    function VideoshomePage(db, app, storage, http, navCtrl, navParams) {
        var _this = this;
        this.app = app;
        this.storage = storage;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.status = [];
        this.test = 'playimg';
        this.db = db;
        this.storage.get('usrid').then(function (usrid) {
            _this.http.get("http://kanchan.mediaoncloud.com/briddgge/fetchStatusAll?user_id=" + usrid).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
            });
        });
        var refNew = this.db.list('/Count/', { query: {
                orderByChild: 'key'
            } }).map(function (array) { return array.reverse(); });
        refNew.subscribe(function (data) {
            var rawList = [];
            _this.afstatus = [];
            data.forEach(function (minispanshot) {
                var refVal = minispanshot.$key;
                var refNew = _this.db.list('/Count/' + refVal);
                refNew.subscribe(function (dataInner) {
                    var newData = dataInner[0];
                    rawList[refVal] = newData;
                    _this.afstatus = rawList;
                });
            });
        });
    }
    VideoshomePage.prototype.play = function (pid, index) {
        this.video = document.getElementById(pid);
        if (this.video.paused === false) {
            this.test = 'playimg';
            this.video.pause();
            // btn.textContent= ">";
        }
        else {
            this.test = 'pauseimg';
            this.video.play();
            // btn.textContent= "||";
        }
    };
    VideoshomePage.prototype.like = function (afcount, afkey, index, pid) {
        var _this = this;
        var newcount = JSON.parse(afcount) + 1;
        this.status[index].likeStatus = true;
        this.storage.get('usrid').then(function (usrid) {
            _this.http.get("http://kanchan.mediaoncloud.com/briddgge/likeStatus?user_id=" + usrid + "&post_id=" + pid + "&likeStatus=1").map(function (res) { return res.json(); }).subscribe(function (data) {
            });
        });
        var ref = this.db.list('/Count/' + pid);
        ref.update(afkey, {
            Likecount: newcount,
        });
    };
    VideoshomePage.prototype.unlike = function (afcount, afkey, index, pid) {
        var _this = this;
        var newcount = JSON.parse(afcount) - 1;
        this.status[index].likeStatus = false;
        this.storage.get('usrid').then(function (usrid) {
            _this.http.get("http://kanchan.mediaoncloud.com/briddgge/likeStatus?user_id=" + usrid + "&post_id=" + pid + "&likeStatus=0").map(function (res) { return res.json(); }).subscribe(function (data) {
            });
        });
        var ref = this.db.list('/Count/' + pid);
        ref.update(afkey, {
            Likecount: newcount,
        });
    };
    VideoshomePage.prototype.Comments = function (postid, postvideo, postmsg, usrname, profileimg) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__comments_comments__["a" /* CommentsPage */], {
            postid: postid,
            postvideo: postvideo,
            postmsg: postmsg,
            postusrname: usrname,
            profilepic: profileimg,
        });
    };
    return VideoshomePage;
}());
VideoshomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-videoshome',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/videoshome/videoshome.html"*/'<ion-header>\n</ion-header>\n\n<ion-content >\n<div  *ngFor="let post of status let i=index;">\n<div *ngIf=" post.video">\n	<ion-row class="post-heading" >\n		<img [src]="post.profile_img" /><h5>{{post.name}}</h5>\n	</ion-row>\n\n	<ion-row  class="post-inner">\n		<p *ngIf="post.message!=\'undefined\'">{{post.message}}</p>\n		<div class="video-main">\n		<video  width="100%" height="180" controls id="{{post.id}}" [src]="post.video"   controlsList="nodownload"></video>\n		<!--<img  *ngIf="test==\'playimg\'" src="img/playbutton.png"  (click)="play(post.id,i)" />\n		<img  *ngIf="test==\'pauseimg\'" src="img/pause.png" (click)="play(post.id,i)" />-->\n		\n		</div>\n	</ion-row>\n	<ion-row class="post-comments" >\n		<a><ion-icon name="ios-chatboxes-outline" (click)="Comments(post.id,post.video,post.message,post.name,post.profile_img)"></ion-icon> <span class="count">{{afstatus[post.id].Commentcount}}</span></a>\n		<a>  \n		<ion-icon name="heart-outline" *ngIf="post.likeStatus==false" (click)="like(afstatus[post.id].Likecount,afstatus[post.id].$key,i,post.id)"></ion-icon> \n		<ion-icon style="color:red;" md="md-heart" *ngIf="post.likeStatus==true" (click)="unlike(afstatus[post.id].Likecount,afstatus[post.id].$key,i,post.id)"></ion-icon> \n		<span class="count" (click)="likepost(post.id,post.img,post.message,post.name,post.profile_img)"></span>{{afstatus[post.id].Likecount}}	</a>\n	</ion-row>\n</div>\n</div>\n\n</ion-content>'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/videoshome/videoshome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], VideoshomePage);

//# sourceMappingURL=videoshome.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivevideoshomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LivevideoshomePage = (function () {
    function LivevideoshomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LivevideoshomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LivevideoshomePage');
    };
    return LivevideoshomePage;
}());
LivevideoshomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-livevideoshome',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/livevideoshome/livevideoshome.html"*/'<ion-header>\n\n</ion-header>\n\n<ion-content>\n<ion-row class="post-heading">\n   <img src="img/profile-img.jpg" /><h5>Jason Sthatham</h5>\n</ion-row>\n\n	<ion-row class="post-inner">\n		<p>Lorem Ipsum is simply dummy text of the printing \nand typesetting industry.</p>\n<iframe width="100%" height="150" src="https://www.youtube.com/embed/TsqbxwQLeEE" frameborder="0" allowfullscreen></iframe>\n	</ion-row>\n	<ion-row class="post-comments">\n<a><ion-icon name="ios-chatboxes-outline"></ion-icon> 26 Comments</a>\n<a>  <ion-icon name="heart-outline"></ion-icon> 256 Likes</a>\n	</ion-row>\n\n\n\n\n<ion-row class="post-heading">\n   <img src="img/profile-img.jpg" /><h5>Jason Sthatham</h5>\n</ion-row>\n	<ion-row class="post-inner">\n		<p>Lorem Ipsum is simply dummy text of the printing \nand typesetting industry.</p>\n<iframe width="100%" height="150" src="https://www.youtube.com/embed/TsqbxwQLeEE" frameborder="0" allowfullscreen></iframe>\n	</ion-row>\n	<ion-row class="post-comments">\n<a><ion-icon name="ios-chatboxes-outline"></ion-icon> 26 Comments</a>\n<a>  <ion-icon name="heart-outline"></ion-icon> 256 Likes</a>\n	</ion-row>\n\n\n</ion-content>'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/livevideoshome/livevideoshome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], LivevideoshomePage);

//# sourceMappingURL=livevideoshome.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddeventinnerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddeventinnerPage = (function () {
    function AddeventinnerPage(navCtrl, datePicker, navParams) {
        this.navCtrl = navCtrl;
        this.datePicker = datePicker;
        this.navParams = navParams;
    }
    AddeventinnerPage.prototype.rangeprice = function (ev) {
        this.price = ev._value;
    };
    AddeventinnerPage.prototype.post = function () {
    };
    AddeventinnerPage.prototype.selectday = function () {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            is24Hour: true,
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        }).then(function (date) {
            alert(date);
        }, function (err) {
            alert(err);
        });
    };
    AddeventinnerPage.prototype.selecttime = function () {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'time',
            is24Hour: true,
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        }).then(function (date) {
            alert(date);
            _this.today = date;
        }, function (err) {
            alert(err);
        });
    };
    AddeventinnerPage.prototype.onChange = function (ev) {
    };
    return AddeventinnerPage;
}());
AddeventinnerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-addeventinner',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/addeventinner/addeventinner.html"*/'\n<ion-header>\n\n<ion-navbar>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding class="main-background">\n <ion-row class="heading"> <p>ADD EVENTS</p></ion-row>\n<ion-row> <ion-input   placeholder="Name" class="input-pass" name="eventname" [(ngModel)]="eventname"></ion-input> </ion-row>\n<ion-row> <ion-input   placeholder="Location" class="input-pass" name="eventlocation" [(ngModel)]="eventlocation"></ion-input> </ion-row>\n<ion-row class="row-padding">  \n  <span style="color:#fff;margin-bottom:-10px;" *ngIf="!eventtype">Event type</span>    \n  <select  placeholder="Event type" onmousedown="this.value=\'\';" name="eventtype" [(ngModel)]="eventtype" (change)="onChange(eventtype)" >		\n          <option > BBQ</option>\n          <option >  Banquet </option>\n          <option > Party</option>\n          <option > Meeting</option>\n          <option > Birthday</option>\n          <option > Festival</option>\n          <option > Galas</option>\n          <option > Award Programs</option>\n          <option > Lunch</option>\n          <option > Wedding</option>\n          <option > Reunion</option>\n          <option > Anniversary</option>\n          <option > Dinner</option>\n          <option > Sports</option>\n          <option > Kickback</option>\n\n        </select></ion-row>\n<ion-row>\n  <p class="input-pass" style=" margin-left: 10px;color: #fff;" *ngIf="price" > ${{price}}</p>\n  <p class="input-pass" style=" margin-left: 10px;color: #fff;" *ngIf="!price" > Price</p> </ion-row>\n  <ion-range min="5" max="50" step="5" snaps="true"  pin="true" (ionChange)="rangeprice($event)" [(ngModel)]="brightness">\n    <ion-icon small range-left name="logo-usd"></ion-icon>>\n     <ion-icon range-right name="logo-usd"></ion-icon>\n   </ion-range>\n\n      <ion-row class="heading"> <p>EVENTS DATE</p></ion-row>\n  <ion-grid>  \n      <ion-row class="dateline">\n\n<ion-col col-2 class="col-one">\n<img src="img/innericon1.png"/>\n  </ion-col>\n<ion-col col-6 class="col-second">\n<p> JUNE25,2016 </p>\n  </ion-col>\n  <ion-col col-4 class="col-third" (click)="selectday()">\n<span>Day</span>\n  </ion-col>\n </ion-row>\n </ion-grid>\n\n\n   <ion-grid>  \n      <ion-row class="dateline">\n\n<ion-col col-2 class="col-one">\n<img src="img/innericon2.png"/>\n  </ion-col>\n<ion-col col-6 class="col-second" >\n<p >{{today}} </p>\n\n  </ion-col>\n  <ion-col col-4 class="col-third" (click)="selecttime()">\n<span class="time">Time</span>\n  </ion-col>\n </ion-row>\n </ion-grid>\n\n\n\n   <ion-grid>  \n      <ion-row class="cemra">\n\n<ion-col col-5 class="col-second">\n<p>Photos</p>\n  </ion-col>\n<ion-col col-7 class="col-img">\n<img src="img/cemra.png"/>\n<img src="img/add.png"/>\n  </ion-col>\n\n </ion-row>\n </ion-grid>\n\n\n<ion-grid>  \n<ion-row class="cemra">\n\n<ion-col col-5 class="col-second">\n<p>Video</p>\n  </ion-col>\n<ion-col col-7 class="col-img">\n<img src="img/videonew.png"/>\n<img src="img/add.png"/>\n  </ion-col>\n\n </ion-row>\n </ion-grid>\n\n\n<ion-row class="post" (click)="post()"><span>Post</span></ion-row>\n\n</ion-content>'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/addeventinner/addeventinner.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], AddeventinnerPage);

//# sourceMappingURL=addeventinner.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatslistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__briddggehome_briddggehome__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatslistPage = (function () {
    function ChatslistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatslistPage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    ChatslistPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__briddggehome_briddggehome__["a" /* BriddggeHomePage */]);
    };
    return ChatslistPage;
}());
ChatslistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chatslist',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/chatslist/chatslist.html"*/'<ion-header>\n  <ion-navbar>\n       <button ion-button menuToggle>\n      <ion-icon name="menu" style="color:#fff;font-size:30px;"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n<p class="next">   \n  <button ion-button><ion-icon name="call" class="icon-call" ></ion-icon></button>\n <button ion-button><ion-icon name="ios-text"   class="icon-call"></ion-icon>  </button>            \n</p>\n</ion-row>\n\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n   <p class="next"> \n  <button ion-button><ion-icon name="call" class="icon-call" ></ion-icon></button>\n <button ion-button><ion-icon name="ios-text"   class="icon-call"></ion-icon>  </button>            \n   </p>\n</ion-row>\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n   <p class="next"> \n  <button ion-button><ion-icon name="call" class="icon-call" ></ion-icon></button>\n <button ion-button><ion-icon name="ios-text"   class="icon-call"></ion-icon>  </button>            \n   </p>\n</ion-row>\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n   <p class="next">  \n  <button ion-button><ion-icon name="call" class="icon-call" ></ion-icon></button>\n  <button ion-button><ion-icon name="ios-text"   class="icon-call"></ion-icon>  </button>            \n   </p>\n</ion-row>\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n   <p class="next"> \n  <button ion-button><ion-icon name="call" class="icon-call" ></ion-icon></button>\n <button ion-button><ion-icon name="ios-text"   class="icon-call"></ion-icon>  </button>            \n   </p>\n</ion-row>\n<ion-footer class="bottom-footer">\n     <ion-icon ios="ios-home" md="md-home" style="margin:7px auto;" (click)="home()"></ion-icon>\n       <ion-icon ios="ios-search" md="md-search" style="margin:7px auto;"></ion-icon>\n       <ion-icon ios="ios-heart" md="md-heart" style="margin:7px auto;"></ion-icon>\n        <ion-icon ios="ios-person" md="md-person" style="margin:7px auto;"  (click)="profile()"></ion-icon>\n    </ion-footer>\n</ion-content>\n\n'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/chatslist/chatslist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ChatslistPage);

//# sourceMappingURL=chatslist.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Rx__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SignupPage = (function () {
    function SignupPage(platform, zone, toastCtrl, loadingCtrl, camera, http, actionSheetCtrl, menu, db, formBuilder, navCtrl, navParams) {
        var _this = this;
        this.platform = platform;
        this.zone = zone;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.menu = menu;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.submitAttempt = false;
        this.searchQuery = '';
        __WEBPACK_IMPORTED_MODULE_8_rxjs_Rx__["Observable"].interval(20000).subscribe(function (x) {
            _this.erroremail = '';
            _this.errorpass = '';
            _this.errorname = '';
            _this.errorgender = '';
            _this.errorcity = '';
        });
        this.typee = 'password';
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.registerForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].pattern(EMAIL_REGEXP)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            fullname: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            gender: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            city: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            school: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            fraternity: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            states: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])]
        });
        this.http.get("http://kanchan.mediaoncloud.com/briddgge/getStates").map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.statesdata = data;
        });
    }
    SignupPage.prototype.selstates = function (states) {
        var _this = this;
        this.http.get("http://kanchan.mediaoncloud.com/briddgge/getCity?state=" + states).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.citydata = data;
        });
    };
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
    SignupPage.prototype.doRegister = function (captureDataUrl, school, city, email, password, name, gender, fraternity, states) {
        var _this = this;
        this.submitAttempt = true;
        if (captureDataUrl == undefined) {
            captureDataUrl = "http://2.mediaoncloud.com/Shilpa/icon_person_by_ninjavdesign-d8x96sl.png";
        }
        if (this.registerForm.valid) {
            this.http.get("http://kanchan.mediaoncloud.com/briddgge/signup?email=" + email + "&gender=" + gender + "&user_type=" + fraternity + "&city=" + city + "&password=" + password + "&name=" + name + "&university=" + school + "&img=" + captureDataUrl + "&state=" + states).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data.msg == "Please fill all fields") {
                    //alert("Please fill all fields");
                    _this.platform.ready().then(function () {
                        window.plugins.toast.show("Please fill all fields", "long", "center");
                    });
                }
                else if (data.msg == "Already Signed Up") {
                    // alert("Email id already exists");
                    _this.platform.ready().then(function () {
                        window.plugins.toast.show("Email id already exists", "long", "center");
                    });
                }
                else {
                    //alert("Check your email for completing registeration process");
                    _this.platform.ready().then(function () {
                        window.plugins.toast.show("Check your email for completing registeration process", "long", "center");
                    });
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                }
            });
        }
        else {
            this.errorcity = 'This field is mandatory to be filled.';
            this.erroremail = 'Please enter a valid email.';
            this.errorname = "Your full name can't be empty.";
            this.errorgender = "Gender field can't be empty.";
            this.errorpass = 'Your password must be more than 6 characters.';
            window.plugins.toast.show("All fields are mandatory to be filled", "long", "center");
        }
    };
    SignupPage.prototype.photoupload = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [{
                    text: 'Upload Picture',
                    cssClass: 'upload',
                    handler: function () {
                        _this.getPicture();
                    }
                },
                {
                    text: 'Use Camera',
                    cssClass: 'camera',
                    handler: function () {
                        _this.takePicture();
                    }
                },
                {
                    text: 'Cancel',
                    cssClass: 'cancel',
                    role: 'cancel'
                }]
        });
        actionSheet.present();
    };
    SignupPage.prototype.getPicture = function () {
        var _this = this;
        this.camera.getPicture({
            quality: 95,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            saveToPhotoAlbum: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
        }).then(function (data) {
            _this.captureDataUrl = 'data:image/jpeg;base64,' + data;
            var storagee = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref();
            var filename = Math.floor(Date.now() / 1000);
            var imageRef = storagee.child("profilepictures/" + filename + ".jpg");
            _this.loading = _this.loadingCtrl.create({
                spinner: 'ios',
                content: 'Uploading...',
            });
            _this.loading.present();
            imageRef.putString(_this.captureDataUrl, __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"].StringFormat.DATA_URL).then(function (snapshot) {
                _this.imgurl = snapshot.downloadURL;
            });
            _this.loading.dismiss();
        }, function (err) {
            // alert(err)
        });
    };
    SignupPage.prototype.takePicture = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var options = {
                quality: 95,
                allowEdit: true,
                saveToPhotoAlbum: true,
                destinationType: _this.camera.DestinationType.DATA_URL,
                encodingType: _this.camera.EncodingType.JPEG,
                sourceType: _this.camera.PictureSourceType.CAMERA,
            };
            _this.zone.run(function () {
                _this.camera.getPicture(options).then(function (imageData) {
                    var storagee = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref();
                    _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
                    var filename = Math.floor(Date.now() / 1000);
                    var imageRef = storagee.child("profilepictures/" + filename + ".jpg");
                    _this.loading = _this.loadingCtrl.create({
                        spinner: 'ios',
                        content: 'Uploading...',
                    });
                    _this.loading.present();
                    imageRef.putString(_this.captureDataUrl, __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"].StringFormat.DATA_URL).then(function (snapshot) {
                        _this.imgurl = snapshot.downloadURL;
                    });
                    _this.loading.dismiss();
                }, function (err) {
                    //    alert(err);
                });
            });
        });
    };
    SignupPage.prototype.onChange = function (SelectedValue) {
        var _this = this;
        console.log(SelectedValue);
        if (SelectedValue.length > 3)
            this.http.get("http://kanchan.mediaoncloud.com/briddgge/getUniversity?city=" + SelectedValue).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.schools = data;
            });
    };
    SignupPage.prototype.onChangesel = function (college) {
        console.log(college);
    };
    SignupPage.prototype.showpass = function () {
        this.typee = 'text';
        this.eye = 'true';
    };
    SignupPage.prototype.hidepass = function () {
        this.typee = 'password';
        this.eye = '';
    };
    SignupPage.prototype.sel = function (val) {
        //console.log(val);
    };
    SignupPage.prototype.selected = function (value) {
        this.gender = value;
    };
    SignupPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.ionViewDidEnter = function () {
        //to disable menu, or
        this.menu.enable(false);
    };
    SignupPage.prototype.ionViewWillLeave = function () {
        // to enable menu.
        this.menu.enable(true);
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/signup/signup.html"*/'<ion-header>\n  <!--<ion-navbar>\n  </ion-navbar>-->\n</ion-header>\n\n\n<ion-content class="maingrid">\n  <button ion-button (click)="back()" style="box-shadow:none;background:transparent;border:none;" >\n    <ion-icon name="ios-arrow-back" style="color:#fff;font-size:40px;font-weight:bolder;" >\n    </ion-icon>\n  </button>\n<img class="img-profile "  (click)="photoupload()" *ngIf="!captureDataUrl" src="http://2.mediaoncloud.com/Shilpa/icon_person_by_ninjavdesign-d8x96sl.png" />\n<img class="img-profile "  (click)="photoupload()" *ngIf="captureDataUrl" [src]="captureDataUrl" />\n<img class="img-profile "   *ngIf="imgurl" [src]="imgurl" style="display:none;" />\n\n  <form  class="signup" [formGroup]="registerForm" novalidate>\n     <ion-row class="row-input">  \n        <img src="img/1.png" style="height:30px;"/>\n        <ion-input #fullname formControlName="fullname" type="text" placeholder="Enter your name" class="input-name" [class.invalid]="!registerForm.controls.fullname.valid && submitAttempt"  name="registerForm.name" [(ngModel)]="registerForm.name"> </ion-input>\n    </ion-row>\n    <ion-row  class="error-message" *ngIf="!registerForm.controls.fullname.valid  &&  submitAttempt && errorname">\n        <p >{{errorname}}</p>\n    </ion-row >\n    <ion-row  class="row-input">\n        <ion-icon  name="ios-mail-outline" style="font-size: 2.6em;color:#fff;margin-bottom:-5px;"></ion-icon>\n        <ion-input #email formControlName="email" type="email" \n        placeholder="abc@gmail.com"  class="input-email"  name="registerForm.email" [(ngModel)]="registerForm.email"\n        [class.invalid]="!registerForm.controls.email.valid && submitAttempt"></ion-input>\n    </ion-row> \n    <ion-row class="error-message" *ngIf="!registerForm.controls.email.valid  &&  submitAttempt && erroremail">\n        <p>{{erroremail}}</p>\n    </ion-row>\n    <ion-row  class="row-input">\n          <img src="img/3.png" style="height:30px;"/>\n          <ion-list radio-group class="gender-list" formControlName="gender">\n          <ion-radio value="Female"  (click)="selected(\'Female\')" [checked]="Female" >\n             Female\n           </ion-radio>Female\n           <ion-radio value="Male" (click)="selected(\'Male\')">\n            Male\n           </ion-radio>Male\n           <ion-item style="display:none;">{{gender}}</ion-item>\n           </ion-list>\n  \n    </ion-row>\n    <ion-row class="error-message"  *ngIf="!registerForm.controls.gender.valid  &&  submitAttempt && errorgender">\n          <p>{{errorgender}}</p>\n    </ion-row>\n    <ion-row class="row-input">\n          <img src="img/2.png" style="height:30px;" />\n          <ion-input #password   formControlName="password" type="{{typee}}"   placeholder="Password" class="input-pass" [class.invalid]="!registerForm.controls.password.valid && submitAttempt"  name="registerForm.pass" [(ngModel)]="registerForm.pass" show-hide-input></ion-input>   \n          <ion-icon md="ios-eye" style="font-size: 2.5em;color:#fff;" *ngIf="eye==\'true\'" (click)="hidepass()"></ion-icon>\n          <ion-icon md="ios-eye-off" style="font-size: 2.5em;color:#fff;" *ngIf="eye!=\'true\'" (click)="showpass()"></ion-icon>\n    </ion-row>\n    <ion-row  class="error-message" *ngIf="!registerForm.controls.password.valid  && submitAttempt && errorpass">\n          <p>{{errorpass}}</p>\n    </ion-row>\n    <!--<ion-row class="row-input">\n            <img src="img/2.png" style="height:30px;"  />\n            <ion-input #password formControlName="password" type="password" placeholder="Confirm Password" class="input-pass" [class.invalid]="!registerForm.controls.password.valid && submitAttempt"  name="registerForm.confpass" [(ngModel)]="registerForm.confpass"></ion-input>\n            <ion-icon md="ios-eye" style="font-size: 2.5em;color:#fff;" *ngIf="eye==\'true\'" (click)="hidepass()"></ion-icon>\n            <ion-icon md="ios-eye-off" style="font-size: 2.5em;color:#fff;" *ngIf="eye!=\'true\'" (click)="showpass()"></ion-icon>\n    </ion-row>\n    <ion-row  class="error-message" *ngIf="!registerForm.controls.password.valid  && submitAttempt && errorpass">\n          <p>{{errorpass}}</p>\n    </ion-row>-->\n <ion-row class="row-input">\n          <img src="img/state.png" style="height:30px;" />\n      <span  class="school-fraternity" *ngIf="!registerForm.states">States</span>\n        <select #states  formControlName="states"  onmousedown="this.value=\'\';" type="text" name="registerForm.states" [class.invalid]="!registerForm.controls.states.valid && submitAttempt"  class="sel-school" [(ngModel)]="registerForm.states" (change)="selstates(registerForm.states)" >		\n            <option *ngFor="let i of statesdata;" [ngValue]="i.code" style="color:#000;" >  {{i.currency}}</option>\n        </select>\n  </ion-row >\n    \n  <ion-row  class="row-sel">\n          <img src="img/5.png" class="city-img" />\n          <span  class="school-fraternity" *ngIf="!registerForm.states">City</span>\n\n         <!--<ion-searchbar (ionInput)="getItems($event)" style="width:45%;" placeholder="City" autocorrect="off"></ion-searchbar>-->\n          <select #city formControlName="city" class="search-box" onmousedown="this.value=\'\';" type="text"  [class.invalid]="!registerForm.controls.city.valid && submitAttempt"  name="registerForm.city" [(ngModel)]="registerForm.city" (change)="onChange(registerForm.city)" >		\n            <option   *ngFor="let item of citydata"  >   {{ item }}</option>\n          </select>\n  </ion-row > \n  <ion-row class="row-input">\n          <img src="img/4.png" style="height:30px;"/>\n          <span class="school-plc" *ngIf="!schools">University</span>\n          <select #school class="uni-select "  formControlName="school" placeholder="University Name" onmousedown="this.value=\'\';" type="text" *ngIf="citydata && (schools)" [class.invalid]="!registerForm.controls.school.valid && submitAttempt"  name="registerForm.school" [(ngModel)]="registerForm.school" (change)="onChangesel(registerForm.school)" >		\n            <option *ngFor="let i of schools" >   {{ i.name }}</option>\n          </select>\n  </ion-row >\n <ion-row class="row-input">\n      <ion-icon name="people" style="font-size: 2.6em;color:#fff;"></ion-icon>\n      <span  class="school-fraternity" *ngIf="!registerForm.fraternity">User Type</span>\n        <select #fraternity  formControlName="fraternity" placeholder="User type" onmousedown="this.value=\'\';" type="text" name="registerForm.fraternity" [class.invalid]="!registerForm.controls.fraternity.valid && submitAttempt"  class="sel-school" [(ngModel)]="registerForm.fraternity" (change)="sel(registerForm.fraternity)" >		\n          <option >  Regular </option>\n          <option >  Member </option>\n          <option > Member Admin</option>\n        </select>\n  </ion-row >\n   <ion-row style="margin-top:26px;"><button ion-button  round outline  class="register"  (click)="doRegister(imgurl,registerForm.school,registerForm.city,registerForm.email,registerForm.pass,registerForm.name,gender,registerForm.fraternity,registerForm.states)">Sign Up</button></ion-row>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventinnerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventinnerPage = (function () {
    function EventinnerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EventinnerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventinnerPage');
    };
    return EventinnerPage;
}());
EventinnerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-eventinner',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/eventinner/eventinner.html"*/'\n<ion-header>\n <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" style="color:#fff;font-size:30px;"></ion-icon>\n    </button>\n        <ion-title >Events</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content class="background">\n<ion-grid class="grid-padding">\n  <ion-row class="row-padding">\n    <ion-col col-2 class="first-col padding-col">\n    <p class="time">10:30AM</p>\n    </ion-col>\n    <ion-col  col-2 class="padding-col">\n        <ion-icon class="icons" ios="ios-mail-outline" md="ios-mail-outline"></ion-icon>\n    </ion-col>\n    <ion-col col-8 class="msgcol">\n<p class="right-para">Lorem ipsum dolor sit amet elit sed do eiusmod tempor sed do eiusmod tempor.Lorem ipsum dolor sit amet elit sed...  </p>\n<p><span class="first-icon"> <ion-icon ios="ios-chatboxes" md="ios-chatboxes-outline"><span>25</span></ion-icon></span>\n<span class="first-icon"> <ion-icon ios="ios-thumbs-up-outline" md="ios-thumbs-up-outline"><span>25</span></ion-icon></span> \n<span class="first-icon"> <ion-icon ios="ios-share-outline" md="ios-share-outline"></ion-icon></span>\n<span class="first-icon"><ion-icon ios="ios-people-outline" md="ios-people-outline"><span>25</span> RSVP</ion-icon></span>   </p>\n\n    </ion-col>\n    </ion-row>\n    <ion-row class="side-line">\n  </ion-row>\n</ion-grid>\n\n\n<ion-grid>\n  <ion-row class="row-padding">\n    <ion-col col-2 class="first-col padding-col">\n    <p class="time">10:30AM</p>\n    </ion-col>\n    <ion-col  col-2 class="padding-col">\n        <ion-icon class="icons" ios="ios-images-outline" md="ios-images-outline"></ion-icon>\n    </ion-col>\n    <ion-col col-8 class="msgcol">\n <p class="img-div"><img src="img/backgroup.jpg"/></p> \n<p><span class="first-icon"> <ion-icon ios="ios-chatboxes" md="ios-chatboxes-outline"><span>25</span></ion-icon></span>\n<span class="first-icon"> <ion-icon ios="ios-thumbs-up-outline" md="ios-thumbs-up-outline"><span>25</span></ion-icon></span> \n<span class="first-icon"> <ion-icon ios="ios-share-outline" md="ios-share-outline"></ion-icon></span>\n<span class="first-icon"><ion-icon ios="ios-people" md="md-people"><span>25</span> RSVP</ion-icon></span>   </p>\n\n    </ion-col>\n    </ion-row>\n    <ion-row class="side-line">\n  </ion-row>\n</ion-grid>\n\n\n<ion-grid class="grid-padding">\n  <ion-row class="row-padding">\n    <ion-col col-2 class="first-col padding-col">\n    <p class="time">10:30AM</p>\n    </ion-col>\n    <ion-col  col-2 class="padding-col">\n            <ion-icon class="icons" ios="ios-mail-outline" md="ios-mail-outline"></ion-icon>\n    </ion-col>\n    <ion-col col-8 class="msgcol">\n<p class="right-para">Lorem ipsum dolor sit amet elit sed do eiusmod tempor sed do eiusmod tempor. </p>\n<p><span class="first-icon"> <ion-icon ios="ios-chatboxes" md="ios-chatboxes-outline"><span>25</span></ion-icon></span>\n<span class="first-icon"> <ion-icon ios="ios-thumbs-up-outline" md="ios-thumbs-up-outline"><span>25</span></ion-icon></span> \n<span class="first-icon"> <ion-icon ios="ios-share-outline" md="ios-share-outline"></ion-icon></span>\n<span class="first-icon"><ion-icon ios="ios-people" md="md-people"><span>25</span> RSVP</ion-icon></span>   </p>\n\n    </ion-col>\n    </ion-row>\n    <ion-row class="side-line">\n  </ion-row>\n</ion-grid>\n\n\n<ion-grid>\n  <ion-row class="row-padding">\n    <ion-col col-2 class="first-col padding-col">\n    <p class="time">10:30AM</p>\n    </ion-col>\n    <ion-col  col-2 class="padding-col">\n              <ion-icon class="icons" ios="ios-images-outline" md="ios-images-outline"></ion-icon>\n    </ion-col>\n    <ion-col col-8 class="msgcol">\n <p class="img-div"><img src="img/backgroup.jpg"/></p> \n<p><span class="first-icon"> <ion-icon ios="ios-chatboxes" md="ios-chatboxes-outline"><span>25</span></ion-icon></span>\n<span class="first-icon"> <ion-icon ios="ios-thumbs-up-outline" md="ios-thumbs-up-outline"><span>25</span></ion-icon></span> \n<span class="first-icon"> <ion-icon ios="ios-share-outline" md="ios-share-outline"></ion-icon></span>\n<span class="first-icon"><ion-icon ios="ios-people" md="md-people"><span>25</span> RSVP</ion-icon></span>   </p>\n\n    </ion-col>\n    </ion-row>\n    <ion-row class="side-line">\n  </ion-row>\n</ion-grid>\n</ion-content>'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/eventinner/eventinner.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], EventinnerPage);

//# sourceMappingURL=eventinner.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MembersPage = (function () {
    function MembersPage(navCtrl, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
    }
    return MembersPage;
}());
MembersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-members',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/members/members.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" style="color:#fff;font-size:30px;"></ion-icon>\n    </button>\n        <ion-title >Members</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n<p class="next">  \n    <!--<ion-icon ios="ios-send" md="md-send"></ion-icon>-->\n    <button ion-button  outline round>Chat</button>\n</p>\n</ion-row>\n\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n   <p class="next">  \n       <!--<ion-icon ios="ios-send" md="md-send"></ion-icon>-->\n         <button ion-button  outline round>Chat</button>\n    </p>\n</ion-row>\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n   <p class="next"> \n        <!--<ion-icon ios="ios-send" md="md-send"></ion-icon>-->\n        <button ion-button  outline round>Chat</button>\n  </p>\n</ion-row>\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n   <p class="next">  \n       <!--<ion-icon ios="ios-send" md="md-send"></ion-icon>-->\n           <button ion-button  outline round>Chat</button>\n  </p>\n</ion-row>\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n   <p class="next">  \n       <!--<ion-icon ios="ios-send" md="md-send"></ion-icon>-->\n        <button ion-button  outline round>Chat</button>\n    </p>\n</ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/members/members.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], MembersPage);

//# sourceMappingURL=members.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestPage = (function () {
    function RequestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RequestPage.prototype.myMethod = function (ev) {
    };
    return RequestPage;
}());
RequestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-request',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/request/request.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" style="color:#fff;font-size:30px;"></ion-icon>\n    </button>\n        <ion-title >Request</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n<p class="next">  \n  <button ion-button>  <ion-icon  md="md-checkmark"></ion-icon></button>\n <button ion-button>  <ion-icon md="md-close"></ion-icon> </button>            \n</p>\n</ion-row>\n\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n   <p class="next">  \n  <button ion-button>  <ion-icon  md="md-checkmark"></ion-icon></button>\n <button ion-button>  <ion-icon md="md-close"></ion-icon> </button>            \n    </p>\n</ion-row>\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n   <p class="next"> \n  <button ion-button>  <ion-icon  md="md-checkmark"></ion-icon></button>\n <button ion-button>  <ion-icon md="md-close"></ion-icon> </button>            \n  </p>\n</ion-row>\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n   <p class="next">  \n  <button ion-button>  <ion-icon  md="md-checkmark"></ion-icon></button>\n <button ion-button>  <ion-icon md="md-close"></ion-icon> </button>            \n  </p>\n</ion-row>\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n   <p class="next">  \n  <button ion-button>  <ion-icon  md="md-checkmark"></ion-icon></button>\n <button ion-button>  <ion-icon md="md-close"></ion-icon> </button>            \n</p>\n</ion-row>\n<ion-footer class="bottom-footer">\n     <ion-icon ios="ios-home" md="md-home" style="margin:7px auto;" (click)="home()"></ion-icon>\n       <ion-icon ios="ios-search" md="md-search" style="margin:7px auto;"></ion-icon>\n       <ion-icon ios="ios-heart" md="md-heart" style="margin:7px auto;"></ion-icon>\n        <ion-icon ios="ios-person" md="md-person" style="margin:7px auto;"  (click)="profile()"></ion-icon>\n    </ion-footer>\n</ion-content>\n\n'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/request/request.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], RequestPage);

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = (function () {
    function SettingsPage(alertCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]();
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        this.recaptchaVerifier = new __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].RecaptchaVerifier('recaptcha-container');
    };
    SettingsPage.prototype.signIn = function (phoneNumber) {
        var appVerifier = this.recaptchaVerifier;
        var phoneNumberString = "+" + phoneNumber;
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
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" style="color:#fff;font-size:30px;"></ion-icon>\n    </button>\n      <ion-title >Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div id="recaptcha-container"></div>\n\n  <ion-item>\n    <ion-label stacked>Phone Number</ion-label>\n    <ion-input type="number" [(ngModel)]="phoneNumber"></ion-input>\n  </ion-item>\n\n  <button ion-button id="sign-in-button" (click)="signIn(phoneNumber)">\n    Sign In\n  </button>\n\n</ion-content>'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/settings/settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(387);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_event_event__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_storyposting_storyposting__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chatslist_chatslist__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_members_members__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_request_request__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_imagess_imagess__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_videoss_videoss__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_findfriends_findfriends__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_briddggehome_briddggehome__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_imageshome_imageshome__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_videoshome_videoshome__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_livevideoshome_livevideoshome__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_addeventspost_addeventspost__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_viewfollowers_viewfollowers__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_comments_comments__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_likestab_likestab__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_commenttab_commenttab__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_eventinner_eventinner__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_addeventinner_addeventinner__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_otherprofile_otherprofile__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_settings_settings__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_imagessother_imagessother__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_videossother_videossother__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_angularfire2__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_angularfire2_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_camera__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_media_capture__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_file__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_angularfire2_auth__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_calendar__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_onesignal__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_date_picker__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_device__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































var firebaseConfig = {
    apiKey: "AIzaSyDL7UI8zs31V4cPK-rQtyEdcG7TG7yNiyo",
    authDomain: "geofirebase-b42f3.firebaseapp.com",
    databaseURL: "https://geofirebase-b42f3.firebaseio.com",
    projectId: "geofirebase-b42f3",
    storageBucket: "geofirebase-b42f3.appspot.com",
    messagingSenderId: "595735101148"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_event_event__["a" /* EventPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_members_members__["a" /* MembersPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_request_request__["a" /* RequestPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_storyposting_storyposting__["a" /* StorypostingPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_imagess_imagess__["a" /* ImagessPage */], __WEBPACK_IMPORTED_MODULE_30__pages_imagessother_imagessother__["a" /* ImagessotherPage */], __WEBPACK_IMPORTED_MODULE_27__pages_addeventinner_addeventinner__["a" /* AddeventinnerPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_videoss_videoss__["a" /* VideossPage */], __WEBPACK_IMPORTED_MODULE_29__pages_settings_settings__["a" /* SettingsPage */], __WEBPACK_IMPORTED_MODULE_31__pages_videossother_videossother__["a" /* VideossotherPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_chatslist_chatslist__["a" /* ChatslistPage */], __WEBPACK_IMPORTED_MODULE_28__pages_otherprofile_otherprofile__["a" /* OtherprofilePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_findfriends_findfriends__["a" /* FindfriendsPage */], __WEBPACK_IMPORTED_MODULE_26__pages_eventinner_eventinner__["a" /* EventinnerPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_briddggehome_briddggehome__["a" /* BriddggeHomePage */], __WEBPACK_IMPORTED_MODULE_25__pages_commenttab_commenttab__["a" /* CommenttabPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_imageshome_imageshome__["a" /* ImageshomePage */], __WEBPACK_IMPORTED_MODULE_24__pages_likestab_likestab__["a" /* LikestabPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_videoshome_videoshome__["a" /* VideoshomePage */], __WEBPACK_IMPORTED_MODULE_23__pages_comments_comments__["a" /* CommentsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_livevideoshome_livevideoshome__["a" /* LivevideoshomePage */], __WEBPACK_IMPORTED_MODULE_22__pages_viewfollowers_viewfollowers__["a" /* ViewfollowersPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_addeventspost_addeventspost__["a" /* AddeventspostPage */], __WEBPACK_IMPORTED_MODULE_21__pages_addeventspost_addeventspost__["b" /* ImagepopverPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_32__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_44__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_35_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_36_angularfire2_database__["b" /* AngularFireDatabaseModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_event_event__["a" /* EventPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_members_members__["a" /* MembersPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_request_request__["a" /* RequestPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_storyposting_storyposting__["a" /* StorypostingPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_imagess_imagess__["a" /* ImagessPage */], __WEBPACK_IMPORTED_MODULE_30__pages_imagessother_imagessother__["a" /* ImagessotherPage */], __WEBPACK_IMPORTED_MODULE_27__pages_addeventinner_addeventinner__["a" /* AddeventinnerPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_videoss_videoss__["a" /* VideossPage */], __WEBPACK_IMPORTED_MODULE_29__pages_settings_settings__["a" /* SettingsPage */], __WEBPACK_IMPORTED_MODULE_31__pages_videossother_videossother__["a" /* VideossotherPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_chatslist_chatslist__["a" /* ChatslistPage */], __WEBPACK_IMPORTED_MODULE_28__pages_otherprofile_otherprofile__["a" /* OtherprofilePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_findfriends_findfriends__["a" /* FindfriendsPage */], __WEBPACK_IMPORTED_MODULE_26__pages_eventinner_eventinner__["a" /* EventinnerPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_briddggehome_briddggehome__["a" /* BriddggeHomePage */], __WEBPACK_IMPORTED_MODULE_25__pages_commenttab_commenttab__["a" /* CommenttabPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_imageshome_imageshome__["a" /* ImageshomePage */], __WEBPACK_IMPORTED_MODULE_24__pages_likestab_likestab__["a" /* LikestabPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_videoshome_videoshome__["a" /* VideoshomePage */], __WEBPACK_IMPORTED_MODULE_23__pages_comments_comments__["a" /* CommentsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_livevideoshome_livevideoshome__["a" /* LivevideoshomePage */], __WEBPACK_IMPORTED_MODULE_22__pages_viewfollowers_viewfollowers__["a" /* ViewfollowersPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_addeventspost_addeventspost__["a" /* AddeventspostPage */], __WEBPACK_IMPORTED_MODULE_21__pages_addeventspost_addeventspost__["b" /* ImagepopverPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_33__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_41__ionic_native_calendar__["a" /* Calendar */], __WEBPACK_IMPORTED_MODULE_42__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_45__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_34__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_39__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_38__ionic_native_media_capture__["a" /* MediaCapture */], __WEBPACK_IMPORTED_MODULE_37__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_43__ionic_native_date_picker__["a" /* DatePicker */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_40_angularfire2_auth__["a" /* AngularFireAuth */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_findfriends_findfriends__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chatslist_chatslist__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_briddggehome_briddggehome__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_addeventspost_addeventspost__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_eventinner_eventinner__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_members_members__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_request_request__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var MyApp = (function () {
    function MyApp(http, storage, oneSignal, platform, statusBar, splashScreen) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.oneSignal = oneSignal;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.profiledata = [];
        this.initializeApp();
        document.addEventListener("pause", function () {
        }, false);
        document.addEventListener("resume", function () {
        }, false);
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_8__pages_briddggehome_briddggehome__["a" /* BriddggeHomePage */], icon: "ios-arrow-forward", imgs: 'http://2.mediaoncloud.com/Shilpa/Briddgge/home.png' },
            { title: 'Chat', component: __WEBPACK_IMPORTED_MODULE_5__pages_chatslist_chatslist__["a" /* ChatslistPage */], icon: "ios-arrow-forward", imgs: 'http://2.mediaoncloud.com/Shilpa/Briddgge/chat.png' },
            { title: 'Events', component: __WEBPACK_IMPORTED_MODULE_11__pages_eventinner_eventinner__["a" /* EventinnerPage */], icon: "ios-arrow-forward", imgs: 'http://2.mediaoncloud.com/Shilpa/Briddgge/events.png' },
            { title: 'Add new Activities', component: __WEBPACK_IMPORTED_MODULE_9__pages_addeventspost_addeventspost__["a" /* AddeventspostPage */], icon: "ios-arrow-forward", imgs: 'http://2.mediaoncloud.com/Shilpa/Briddgge/activities.png' },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */], icon: "ios-arrow-forward", imgs: 'http://2.mediaoncloud.com/Shilpa/Briddgge/setting.png' },
            { title: 'Members', component: __WEBPACK_IMPORTED_MODULE_12__pages_members_members__["a" /* MembersPage */], icon: "ios-arrow-forward", imgs: 'http://2.mediaoncloud.com/Shilpa/Briddgge/members.png' },
            { title: 'Request', component: __WEBPACK_IMPORTED_MODULE_13__pages_request_request__["a" /* RequestPage */], icon: "ios-arrow-forward", imgs: 'http://2.mediaoncloud.com/Shilpa/Briddgge/request.png' },
            { title: 'Find friends', component: __WEBPACK_IMPORTED_MODULE_4__pages_findfriends_findfriends__["a" /* FindfriendsPage */], icon: "ios-arrow-forward", imgs: 'http://2.mediaoncloud.com/Shilpa/Briddgge/request.png' },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: "ios-arrow-forward", imgs: 'http://2.mediaoncloud.com/Shilpa/Briddgge/logout.png' },
        ];
        this.storage.get('usrid').then(function (usrid) {
            _this.usrid = usrid;
            if (!_this.usrid) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
            }
            else if (_this.usrid) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_briddggehome_briddggehome__["a" /* BriddggeHomePage */];
            }
        });
        //Observable.interval(1000 * 60).subscribe(x => {
        this.storage.get('usrid').then(function (usrid) {
            _this.http.get("http://kanchan.mediaoncloud.com/briddgge/getProfile?user_id=" + usrid).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.profiledata = data;
            });
        });
        //})
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.initnoti();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.initnoti = function () {
        this.oneSignal.startInit('1be56a71-d635-41cd-9eba-1d640a6b3f39', '595735101148');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        this.oneSignal.handleNotificationReceived().subscribe(function () {
            // do something when notification is received
        });
        this.oneSignal.getIds().then(function (dviceid) {
            //   alert(dviceid.userId);      
            //   alert(dviceid.pushToken);
        });
        this.oneSignal.handleNotificationOpened().subscribe(function () {
            // do something when a notification is opened
        });
        this.oneSignal.endInit();
    };
    MyApp.prototype.logout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/app/app.html"*/'<ion-menu [content]="content"  persistent="true">\n  <ion-header style="display:none">\n    <ion-toolbar>\n    </ion-toolbar>\n  </ion-header>\n   <ion-content class="sidemain">   \n      <ion-row class="main-sidebar"> \n        <img *ngIf="!profiledata.img" src="http://2.mediaoncloud.com/Shilpa/icon_person_by_ninjavdesign-d8x96sl.png"/>      \n          <img *ngIf="profiledata.img" [src]="profiledata.img"/>      \n          </ion-row>      \n           <p *ngIf="profiledata.name">{{profiledata.name}}</p>   \n      <ion-list>    \n    <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">    \n     <img [src]="p.imgs"  item-left style="height:22px;width:22px;"/> {{p.title}}   \n       <ion-icon [name]="p.icon" item-right style="color:#fff; font-weight: 900;"></ion-icon>   \n      </button>   \n  </ion-list>  \n  </ion-content>\n  </ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/app/app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_15__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BriddggeHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imageshome_imageshome__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__videoshome_videoshome__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__livevideoshome_livevideoshome__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__addeventspost_addeventspost__ = __webpack_require__(182);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BriddggeHomePage = (function () {
    function BriddggeHomePage(http, storage, navCtrl, menu, platform, navParams) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.platform = platform;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__imageshome_imageshome__["a" /* ImageshomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__videoshome_videoshome__["a" /* VideoshomePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__livevideoshome_livevideoshome__["a" /* LivevideoshomePage */];
        this.stories = [];
        this.profiledata = [];
        //this.uid=this.navParams.get('userid');
        this.storage.get('usrid').then(function (usrid) {
            _this.http.get("http://kanchan.mediaoncloud.com/briddgge/recentPostUsers?user_id=" + usrid).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.stories = data;
                _this.imgcount = _this.stories[0].imgCount;
                _this.videocount = _this.stories[0].vidCount;
            });
            _this.http.get("http://kanchan.mediaoncloud.com/briddgge/getProfile?user_id=" + usrid).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.profiledata = data;
            });
        });
    }
    BriddggeHomePage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
    };
    BriddggeHomePage.prototype.home = function () {
    };
    BriddggeHomePage.prototype.addstory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__addeventspost_addeventspost__["a" /* AddeventspostPage */]);
    };
    return BriddggeHomePage;
}());
BriddggeHomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-briddggehome',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/briddggehome/briddggehome.html"*/'<ion-header>\n <ion-navbar hideBackButton>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" style="color:#fff;font-size:30px;"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n<ion-scroll scrollX="true" class="first-scroll top-scroll">\n      <ion-card >\n      <img class="storyimg" [src]="profiledata.img" /> \n      <button ion-button class="addstory" (click)="addstory()"> \n       <ion-icon class="addicon" ios="ios-add" md="md-add"></ion-icon>\n      </button>\n      <a>{{profiledata.name}}</a>\n    </ion-card>\n    <ion-card *ngFor="let story of stories;">\n      <img [src]="story.profile_img" />\n      <a>{{story.name}}</a>\n    </ion-card>\n  </ion-scroll>\n\n <ion-tabs style="position:relative;height:92%;top:2%;">\n <ion-tab [root]="tab1Root"  tabBadge="{{imgcount}}" tabBadgeStyle="danger"  tabTitle="Images"> </ion-tab>  \n  <ion-tab [root]="tab2Root"   tabBadge="{{videocount}}" tabBadgeStyle="danger" tabTitle="Videos"></ion-tab>\n   <ion-tab [root]="tab3Root"  tabBadge="25" tabBadgeStyle="danger" tabTitle="Live Videos"></ion-tab>\n</ion-tabs>\n\n\n<ion-footer class="bottom-footer">\n      <ion-icon ios="ios-home" md="md-home" (click)="home()" ></ion-icon>\n      <ion-icon ios="ios-search" md="md-search"></ion-icon>\n      <ion-icon ios="ios-heart" md="md-heart"></ion-icon>\n      <ion-icon ios="ios-person" md="md-person" (click)="profile()"></ion-icon>\n    </ion-footer>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/briddggehome/briddggehome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], BriddggeHomePage);

//# sourceMappingURL=briddggehome.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videoss_videoss__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__imagess_imagess__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__briddggehome_briddggehome__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfilePage = (function () {
    function ProfilePage(storage, http, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__videoss_videoss__["a" /* VideossPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_5__imagess_imagess__["a" /* ImagessPage */];
        this.profiledata = [];
        this.storage.get('usrid').then(function (usrid) {
            _this.userid = usrid;
            _this.http.get("http://kanchan.mediaoncloud.com/briddgge/getProfile?user_id=" + usrid).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.profiledata = data;
            });
        });
    }
    ProfilePage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__briddggehome_briddggehome__["a" /* BriddggeHomePage */]);
    };
    ProfilePage.prototype.profile = function () {
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/profile/profile.html"*/'<ion-header>\n\n</ion-header>\n\n<ion-content>\n \n    <ion-row class="main-profile">\n        <img src="img/proimg1.jpg"/>\n    </ion-row>\n    <ion-row class="profile-row">\n          <img class="img-pro" [src]="profiledata.img"/>\n\n      <p class="heading-main">{{profiledata.name}}</p>\n      <p class="heading-second">{{profiledata.user_type}}</p>\n<ul>\n    <li><a href="#">20K</a>Followers</li><img src="img/dot.png"/>\n    <li><a href="#">10</a>Chat</li><img src="img/dot.png"/>\n    <li><a href="#">15</a> Members</li>\n</ul>\n\n        </ion-row>\n <ion-tabs style="position:relative;height:60%;">\n  <ion-tab [root]="tab1Root" tabTitle="Video" tabIcon="logo-youtube" [rootParams]="userid" ><img src="img/vid.png"/></ion-tab>\n  <ion-tab [root]="tab2Root " tabIcon="md-aperture"  tabTitle="Images" [rootParams]="userid"></ion-tab>\n  <ion-tab [root]="tab3Root"  tabIcon="md-barcode"  tabTitle="Live Video"></ion-tab>\n\n</ion-tabs>\n<ion-footer class="bottom-footer">\n     <ion-icon ios="ios-home" md="md-home" (click)="home()"></ion-icon>\n       <ion-icon ios="ios-search" md="md-search"></ion-icon>\n       <ion-icon ios="ios-heart" md="md-heart"></ion-icon>\n        <ion-icon ios="ios-person" md="md-person" (click)="profile()"></ion-icon>\n    </ion-footer>\n</ion-content>\n\n'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_media_capture__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = (function () {
    function HomePage(zone, navParams, file, db, mediaCapture, alertCtrl, toastCtrl, platform, actionSheetCtrl, camera, navCtrl) {
        var _this = this;
        this.zone = zone;
        this.navParams = navParams;
        this.file = file;
        this.mediaCapture = mediaCapture;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.db = db;
        this.items = db.list('/items');
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]();
        this.items.subscribe(function (data) {
            _this.img = data;
            data.forEach(function (minispanshot) {
                var keys = minispanshot.$key;
                // console.log(keys);  
            });
        });
        this.items = db.list('/usrdata/');
        this.items.subscribe(function (data) {
            console.log(data[0].$value);
            // console.log(data[1].$value);
        });
        // this.items.update('-KptVoELHYJbSIA-R--X',{
        //   name:'Apps'
        // })
        //  const usr = this.db.list('/users'); 
        //  usr.push({ name: 'Shilpa' });
    }
    HomePage.prototype.test = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var options = {
                sourceType: _this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                mediaType: _this.camera.MediaType.ALLMEDIA,
                destinationType: _this.camera.DestinationType.FILE_URI
            };
            _this.camera.getPicture(options).then(function (fileUri) {
                // alert('File URI: ' + JSON.stringify(fileUri));
                window.resolveLocalFileSystemURL('file://' + fileUri, function (fileEntry) {
                    // alert('Type: ' + (typeof fileEntry));
                    fileEntry.file(function (file) {
                        //  alert('File: ' + (typeof file) + ', ' + JSON.stringify(file));
                        var fileReader = new FileReader();
                        fileReader.onloadend = function (result) {
                            alert('File Reader Result: ' + JSON.stringify(result));
                            var arrayBuffer = result.target.result;
                            //  alert(arrayBuffer);
                            var blob = new Blob([new Uint8Array(arrayBuffer)], { type: 'video/mp4' });
                            var name = '' + Date.now();
                            // alert(blob);
                            __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child(name).put(blob);
                        };
                        fileReader.onerror = function (error) {
                            reject(error);
                        };
                        fileReader.readAsArrayBuffer(file);
                    }, function (error) {
                        console.log('File Entry Error: ' + JSON.stringify(error));
                    });
                }, function (error) {
                    console.log('Error resolving file: ' + JSON.stringify(error));
                });
            });
        });
    };
    HomePage.prototype.signIn = function (phoneNumber) {
        var _this = this;
        var appVerifier = this.recaptchaVerifier;
        var phoneNumberString = "+" + phoneNumber;
        __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().signInWithPhoneNumber(phoneNumberString, appVerifier)
            .then(function (confirmationResult) {
            var prompt = _this.alertCtrl.create({
                title: 'Enter the Confirmation code',
                inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
                buttons: [
                    { text: 'Cancel',
                        handler: function (data) { console.log('Cancel clicked'); }
                    },
                    { text: 'Send',
                        handler: function (data) {
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
    };
    HomePage.prototype.uploadImage = function () {
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
    };
    /**********Capture audio  from camera***********/
    HomePage.prototype.audiorecord = function () {
        var _this = this;
        this.mediaCapture.captureAudio().then(function (data) {
            _this.MediaFile = data[0].fullPath;
            alert(_this.MediaFile);
            window.resolveLocalFileSystemURL(_this.MediaFile, function (fileEntry) {
                fileEntry.file(function (file) {
                    var fileReader = new FileReader();
                    fileReader.onloadend = function (result) {
                        var arrayBuffer = result.target.result;
                        var blob = new Blob([new Uint8Array(arrayBuffer)], { type: 'audio/mpeg' });
                        var name = '' + Date.now();
                        // alert(blob);
                        __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child(name).put(blob).then(function (snapshot) {
                            _this.x = snapshot.downloadURL;
                            _this.videos = _this.db.list('/items');
                            _this.videos.push({
                                audiodownloadURL: _this.x
                            });
                        });
                    };
                    fileReader.readAsArrayBuffer(file);
                });
            }, function (error) {
                console.log('File Entry Error: ' + JSON.stringify(error));
            });
        }, function (err) {
            alert(err);
        });
    };
    HomePage.prototype.takePicture = function (key) {
        var _this = this;
        /******Accessing photos gallery with database query*******/
        if (key == 0) {
            this.camera.getPicture({
                quality: 95,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                allowEdit: true,
                saveToPhotoAlbum: true,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
            }).then(function (data) {
                _this.img = data;
                _this.captureDataUrl = 'data:image/jpeg;base64,' + data;
                var storagee = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref();
                var filename = Math.floor(Date.now() / 1000);
                var imageRef = storagee.child("pictures/" + filename + ".jpg");
                imageRef.putString(_this.captureDataUrl, __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"].StringFormat.DATA_URL).then(function (snapshot) {
                    _this.x = snapshot.downloadURL;
                    console.log(snapshot);
                    _this.items.push({
                        downloadURL: _this.x
                    });
                });
            }, function (err) {
                alert(err);
            });
        }
        /******Accessing  video library ******/
        if (key == 1) {
            this.camera.getPicture({
                quality: 95,
                destinationType: this.camera.DestinationType.FILE_URI,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                mediaType: this.camera.MediaType.VIDEO
            }).then(function (videouri) {
                _this.captureDataUrl = videouri;
                var storagee = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref();
                window.resolveLocalFileSystemURL('file://' + videouri, function (fileEntry) {
                    fileEntry.file(function (file) {
                        var fileReader = new FileReader();
                        fileReader.onloadend = function (result) {
                            var arrayBuffer = result.target.result;
                            var blob = new Blob([new Uint8Array(arrayBuffer)], { type: 'video/mp4' });
                            var name = '' + Date.now();
                            // alert(blob);
                            __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child(name).put(blob).then(function (snapshot) {
                                _this.x = snapshot.downloadURL;
                                _this.videos = _this.db.list('/items');
                                _this.videos.push({
                                    videodownloadURL: _this.x
                                });
                            });
                        };
                        fileReader.readAsArrayBuffer(file);
                    }, function (error) {
                        console.log('File Entry Error: ' + JSON.stringify(error));
                    });
                }, function (error) {
                    console.log('Error resolving file: ' + JSON.stringify(error));
                });
            }, function (err) {
                alert(err);
            });
        }
        /******Accessing phone gallery *******/
        if (key == 2) {
            this.camera.getPicture({
                quality: 100,
                sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                destinationType: this.camera.DestinationType.FILE_URI,
                mediaType: this.camera.MediaType.ALLMEDIA,
                saveToPhotoAlbum: true,
            }).then(function (data) {
                alert(data);
            }, function (err) {
                alert(err);
            });
        }
        /**********Capture video  from camera***********/
        if (key == 4) {
            var options = { limit: 1 };
            this.mediaCapture.captureVideo().then(function (data) {
                //  this.storage.set('localurl',data[0].localURL),
                // this.storage.set('storpath',data[0].fullPath);
                //     alert(data[0].fullPath);
                _this.MediaFile = data[0].fullPath;
                //  alert(this.MediaFile);
                //   alert(data[0].localURL);
                window.resolveLocalFileSystemURL(_this.MediaFile, function (fileEntry) {
                    fileEntry.file(function (file) {
                        var fileReader = new FileReader();
                        fileReader.onloadend = function (result) {
                            var arrayBuffer = result.target.result;
                            var blob = new Blob([new Uint8Array(arrayBuffer)], { type: 'video/mp4' });
                            var name = '' + Date.now();
                            // alert(blob);
                            __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child(name).put(blob).then(function (snapshot) {
                                _this.x = snapshot.downloadURL;
                                _this.videos = _this.db.list('/items');
                                _this.videos.push({
                                    videodownloadURL: _this.x
                                });
                            });
                        };
                        fileReader.readAsArrayBuffer(file);
                    });
                }, function (error) {
                    console.log('File Entry Error: ' + JSON.stringify(error));
                });
            }, function (err) {
                alert(err);
            });
        }
    };
    /********Capture image from camera query*********/
    HomePage.prototype.capture = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var options = {
                quality: 95,
                allowEdit: true,
                saveToPhotoAlbum: true,
                destinationType: _this.camera.DestinationType.DATA_URL,
                encodingType: _this.camera.EncodingType.JPEG,
                sourceType: _this.camera.PictureSourceType.CAMERA,
            };
            _this.zone.run(function () {
                _this.camera.getPicture(options).then(function (imageData) {
                    var storagee = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref();
                    _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
                    var filename = Math.floor(Date.now() / 1000);
                    var imageRef = storagee.child("img/" + filename + ".jpg");
                    imageRef.putString(_this.captureDataUrl, __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"].StringFormat.DATA_URL).then(function (snapshot) {
                        _this.x = snapshot.downloadURL;
                        //console.log(snapshot);
                        _this.items.push({
                            downloadURL: _this.x
                        });
                    });
                }, function (err) {
                    alert(err);
                });
            });
        });
    };
    HomePage.prototype.doLogout = function () {
        this.fireAuth.signOut();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button color="danger"  round block (click)="doLogout()">\n      Logout\n    </button>\n<button ion-button color="danger" outline round (click)="takePicture(0)">\n Accessing image gallery\n</button>\n\n<button ion-button color="danger" outline round (click)="takePicture(1)">\n Accessing video gallery\n</button>\n<button ion-button color="danger" outline round (click)="takePicture(2)">\n   Accessing all media\n</button><br>\n<button ion-button color="danger" outline round (click)="capture()">\n   Capture image\n</button>\n<button ion-button color="danger" outline round (click)="takePicture(4)">\n   Capture video\n</button>\n<button ion-button color="danger" outline round (click)="audiorecord()">\n  Audio\n</button>\n<!--<button ion-button color="danger" outline round (click)="test()">\n Test\n</button>-->\n<!--<img [src]="x" *ngIf="x"/>-->\n<!--<video width="320" height="240" id="resource-video" controls="controls" autoplay="false" \n  [src]="MediaFile" *ngIf="MediaFile">\n</video>-->\n<ion-list >    \n  <ion-card>\n  <ion-item *ngFor="let value of img">  \n <img [src]="value.downloadURL"  *ngIf="value.downloadURL"/> \n <video width="320" height="240" id="resource-video" controls="controls" autoplay="false" [src]="value.videodownloadURL" *ngIf="value.videodownloadURL">\n</video>\n <audio width="320" height="240" controls="controls" *ngIf="value.audiodownloadURL" [src]="value.audiodownloadURL">\n</audio>\n </ion-item>\n  </ion-card>  \n </ion-list> \n   <div id="recaptcha-container"></div>\n\n  <ion-item>\n    <ion-label stacked>Phone Number</ion-label>\n    <ion-input type="number" [(ngModel)]="phoneNumber"></ion-input>\n  </ion-item>\n\n  <button ion-button id="sign-in-button" (click)="signIn(phoneNumber)">\n    Sign In\n  </button>\n</ion-content>\n'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_media_capture__["a" /* MediaCapture */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListPage = (function () {
    function ListPage(db, formBuilder, navCtrl, navParams) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.submitAttempt = false;
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]();
        this.userData = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/usrdata');
        __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__["Observable"].interval(30000).subscribe(function (x) {
            _this.erroremail = '';
            _this.errorpass = '';
            _this.errorname = '';
        });
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.registerForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern(EMAIL_REGEXP)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
            fullname: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])]
        });
    }
    ListPage.prototype.doRegister = function (email, password, name) {
        var _this = this;
        this.submitAttempt = true;
        if (this.registerForm.valid) {
            this.fireAuth.createUserWithEmailAndPassword(email, password).then(function (newUser) {
                _this.erroremail = '';
                _this.errorpass = '';
                _this.errorname = '';
                _this.fireAuth.currentUser.sendEmailVerification().then(function () {
                    alert("Check your email for completing registeration process");
                });
                _this.userData.child(newUser.uid).set({ email: email, name: name });
                //this.navCtrl.push(LoginPage);
            }, function (error) {
                console.log(error);
                if (error.code == 'auth/email-already-in-use') {
                    alert('The email address is already in use by another account.');
                }
                else {
                    alert('Something went wrong');
                }
            });
        }
        else {
            this.erroremail = 'Please enter a valid email.';
            this.errorpass = 'Your password must be more than 6 characters.';
            this.errorname = "Your full name can't empty.";
        }
    };
    ListPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align:center;">Signup</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content  class="maingrid">\n\n  <ion-grid>\n  <form [formGroup]="registerForm" (submit)="doRegister(registerForm.email,registerForm.pass,registerForm.name)" novalidate>\n    <ion-item>\n      <ion-input #email formControlName="email" type="email" \n        placeholder="abc@gmail.com"  class="input-email"  name="registerForm.email" [(ngModel)]="registerForm.email"\n        [class.invalid]="!registerForm.controls.email.valid && submitAttempt"></ion-input>\n    </ion-item> \n    <ion-item class="error-message" *ngIf="!registerForm.controls.email.valid  &&  submitAttempt">\n      <p>{{erroremail}}</p>\n    </ion-item>\n    <ion-item>\n      <ion-input #password formControlName="password" type="password" class="input-pass" [class.invalid]="!registerForm.controls.password.valid && submitAttempt"  name="registerForm.pass" [(ngModel)]="registerForm.pass"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!registerForm.controls.password.valid  && submitAttempt">\n      <p>{{errorpass}}</p>\n    </ion-item>\n    <ion-item>\n      <ion-input #fullname formControlName="fullname" type="text" placeholder="Enter your name" class="input-name" [class.invalid]="!registerForm.controls.fullname.valid && submitAttempt"  name="registerForm.name" [(ngModel)]="registerForm.name"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!registerForm.controls.fullname.valid  &&  submitAttempt">\n      <p>{{errorname}}</p>\n    </ion-item>\n   <ion-row><button ion-button color="danger"  round block  class="register">Register</button></ion-row>\n\n  </form>\n  </ion-grid>\n   <ion-row><button ion-button color="danger"  round block (click)="login()" class="login">Login to your account</button></ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/list/list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventPage = (function () {
    function EventPage(alertCtrl, http, datePicker, storage, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.datePicker = datePicker;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    EventPage.prototype.getItems = function (ev) {
        var _this = this;
        // Reset items back to all of the items
        this.http.get("http://kanchan.mediaoncloud.com/briddgge/colleges.php?slug=city").map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.citydata = data;
            // set val to the value of the searchbar
            var val = ev.target.value;
            var q = ev.srcElement.value;
            // if the value is an empty string don't filter the items
            if (!q) {
                return;
            }
            _this.citydata = _this.citydata.filter(function (v) {
                if (v && q.length > 3) {
                    if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                        return true;
                    }
                    return false;
                }
            });
            //  console.log(q,this.citydata.length)
        });
    };
    EventPage.prototype.City = function (SelectedValue) {
        console.log(SelectedValue);
        //  if(SelectedValue.length>3)
        //   this.http.get("http://kanchan.mediaoncloud.com/briddgge/colleges.php?city="+SelectedValue).map(res => res.json()).subscribe(data => {
        //    this.schools=data;
        //  })
    };
    EventPage.prototype.onChangesel = function (college) {
        console.log(college);
    };
    EventPage.prototype.signIn = function (phoneNumber) {
        var _this = this;
        var appVerifier = this.recaptchaVerifier;
        var phoneNumberString = "+" + phoneNumber;
        __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().signInWithPhoneNumber(phoneNumberString, appVerifier)
            .then(function (confirmationResult) {
            var prompt = _this.alertCtrl.create({
                title: 'Enter the Confirmation code',
                inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
                buttons: [
                    { text: 'Cancel',
                        handler: function (data) { console.log('Cancel clicked'); }
                    },
                    { text: 'Send',
                        handler: function (data) {
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
    };
    //  onChange(SelectedValue){
    //    console.log(SelectedValue);
    //  }
    EventPage.prototype.showDate = function () {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            is24Hour: true,
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        }).then(function (date) {
            //  alert( date);
        }, function (err) {
            alert(err);
        });
    };
    EventPage.prototype.toggleSearch = function () {
        this.toggled = this.toggled ? false : true;
    };
    EventPage.prototype.showTime = function () {
        this.datePicker.show({
            date: new Date(),
            mode: 'time',
            is24Hour: true,
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        }).then(function (date) {
            //   alert( date);
        }, function (err) {
            alert(err);
        });
    };
    return EventPage;
}());
EventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-event',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/event/event.html"*/'<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle *ngIf="!toggled">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title *ngIf="!toggled" >Event</ion-title>\n     <ion-icon *ngIf="!toggled" (click)="toggleSearch()" name="search" class="search" style="float:right;"></ion-icon>\n  <ion-searchbar *ngIf="toggled" [(ngModel)]="cities"  (ionCancel)="onCancel(cities)" [showCancelButton]="shouldShowCancel" (ionInput)="getItems(cities)"></ion-searchbar>\n\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n<select [(ngModel)]="states" name="states"  (change)="onChange(states)" >		\n	  <option  disabled selected value style="color:Grey;">Schools</option>\n  	<option *ngFor="let item of citydata" >   {{ item.name }}</option>\n    <option *ngFor="let item of citydata" style="display:none;">{{ item.state }}</option>\n\n</select>\n  </ion-grid>\n<ion-row style="margin-top: 25px;">\n<button ion-button color="danger" outline round (click)="showDate()">\nCalender\n</button>\n<button ion-button color="danger" outline round (click)="showTime()">\nTime\n</button>\n</ion-row>\n\n <div id="recaptcha-container"></div>\n\n  <ion-item>\n    <ion-label stacked>Phone Number</ion-label>\n    <ion-input type="number" [(ngModel)]="phoneNumber"></ion-input>\n  </ion-item>\n\n  <button ion-button id="sign-in-button" (click)="signIn(phoneNumber)">\n    Sign In\n  </button>\n  <ion-searchbar (ionInput)="getItems($event)" style="width:80%;" multiple placeholder="City" ></ion-searchbar>\n  <br>  <select onmousedown="this.value=\'\';" type="text" style="background-color: #6c6459;;color:#fff;font-size:initial;" name="city" [(ngModel)]="city" (change)="City(city)" >		\n      <option  id="test" *ngFor="let item of citydata"  >   {{ item }}</option>\n    </select>\n    <br>\n  <!--<ion-row style="margin-top:10px;">\n    <select type="text"  class="sel-school" name="registerForm.school" [(ngModel)]="school" (change)="onChangesel(school)" >		\n      <option *ngFor="let i of schools" >   {{ i.name }}</option>\n    </select>\n  </ion-row >-->\n</ion-content>\n'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/event/event.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], EventPage);

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorypostingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videoss_videoss__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__imagess_imagess__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__briddggehome_briddggehome__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StorypostingPage = (function () {
    function StorypostingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__imagess_imagess__["a" /* ImagessPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__videoss_videoss__["a" /* VideossPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__videoss_videoss__["a" /* VideossPage */];
    }
    StorypostingPage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
    };
    StorypostingPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__briddggehome_briddggehome__["a" /* BriddggeHomePage */]);
    };
    return StorypostingPage;
}());
StorypostingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-storyposting',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/storyposting/storyposting.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" style="color:#fff;font-size:30px;"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n \n    <ion-row class="main-profile">\n        <!--<img src="img/back-profile.jpg"/>-->\n            <video  controls="controls"  controlsList="nodownload" style="background: black;min-height:auto; width:100%; vertical-align:middle;">      \n              <source  src="img/test.mp4" codecs="avc1.42E01E, mp4a.40.2" /> \n        </video>\n    </ion-row>\n    <ion-row>\n      <p class="btn-edit"><button>Edit Profile</button></p>\n    </ion-row>\n <ion-tabs style="position:relative;height:60%;">\n  <ion-tab [root]="tab1Root"  tabTitle="Images"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Videos"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Live"></ion-tab> \n</ion-tabs>\n  <ion-footer class="bottom-footer">\n    \n     <ion-icon ios="ios-home" md="md-home"></ion-icon>\n       <ion-icon ios="ios-search" md="md-search"></ion-icon>\n       <ion-icon ios="ios-heart" md="md-heart"></ion-icon>\n        <ion-icon ios="ios-person" md="md-person" (click)="profile()"></ion-icon>\n    </ion-footer>\n</ion-content>\n\n\n'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/storyposting/storyposting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], StorypostingPage);

//# sourceMappingURL=storyposting.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewfollowersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__briddggehome_briddggehome__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewfollowersPage = (function () {
    function ViewfollowersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ViewfollowersPage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    ViewfollowersPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__briddggehome_briddggehome__["a" /* BriddggeHomePage */]);
    };
    return ViewfollowersPage;
}());
ViewfollowersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-viewfollowers',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/viewfollowers/viewfollowers.html"*/'\n<ion-header>\n\n <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" style="color:#fff;font-size:30px;"></ion-icon>\n    </button>\n        <ion-title>Followers</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content >\n  <ion-row class="dropdown">\n <ion-label >Select Year</ion-label>\n  <ion-select [(ngModel)]="Year" class="selyear">\n    <ion-option>2013</ion-option>\n    <ion-option>2012</ion-option>\n    <ion-option>2014</ion-option>\n    <ion-option>2015</ion-option>\n    <ion-option>2016</ion-option>\n    <ion-option>2017</ion-option>\n  </ion-select>\n  </ion-row>\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n<p class="next">  \n    <button ion-button  outline round>View Profile</button>\n</p>\n</ion-row>\n\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n   <p class="next">  \n         <button ion-button  outline round>View Profile</button>\n    </p>\n</ion-row>\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n   <p class="next"> \n        <button ion-button  outline round>View Profile</button>\n  </p>\n</ion-row>\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n   <p class="next">  \n           <button ion-button  outline round>View Profile</button>\n  </p>\n</ion-row>\n<ion-row class="tiles">\n   <img src="img/profile-img.jpg"/>\n   <p class="name">Jason Statham</p>\n   <p class="next">  \n        <button ion-button  outline round>View Profile</button>\n    </p>\n</ion-row>\n<ion-footer class="bottom-footer">\n     <ion-icon ios="ios-home" md="md-home" (click)="home()"></ion-icon>\n       <ion-icon ios="ios-search" md="md-search"></ion-icon>\n       <ion-icon ios="ios-heart" md="md-heart"></ion-icon>\n        <ion-icon ios="ios-person" md="md-person"></ion-icon>\n    </ion-footer>\n</ion-content>\n'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/viewfollowers/viewfollowers.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ViewfollowersPage);

//# sourceMappingURL=viewfollowers.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__briddggehome_briddggehome__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = (function () {
    function LoginPage(http, platform, storage, menu, navCtrl, db, formBuilder, alertCtrl, loadingCtrl, navParams) {
        var _this = this;
        this.http = http;
        this.platform = platform;
        this.storage = storage;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.submitAttempt = false;
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].interval(30000).subscribe(function (x) {
            _this.error = '';
            _this.errormsg = '';
        });
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(EMAIL_REGEXP)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])]
        });
    }
    LoginPage.prototype.loginUser = function (email, password) {
        var _this = this;
        this.submitAttempt = true;
        if (this.loginForm.valid) {
            this.error = '';
            this.http.get("http://kanchan.mediaoncloud.com/briddgge/login?email=" + email + "&password=" + password).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.storage.set('usrid', data.id);
                var loading = _this.loadingCtrl.create({
                    spinner: 'ios',
                    content: ''
                });
                loading.present();
                setTimeout(function () {
                    //  alert("You are logged in successfully");
                    loading.dismiss();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__briddggehome_briddggehome__["a" /* BriddggeHomePage */]);
                }, 7000);
                _this.platform.ready().then(function () {
                    window.plugins.toast.show("You are logged in successfully", "long", "center");
                });
                //  this.navCtrl.push(BriddggeHomePage,{
                //    userid:data.id
                //  }); 
            });
        }
        else {
            this.error = 'Enter valid email id.';
            this.errormsg = 'Your password must be more than 6 characters.';
        }
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.forgot = function (email) {
        if (email == undefined) {
            // alert('Please fill the email id to continue');
            this.platform.ready().then(function () {
                window.plugins.toast.show("Please fill the email id to continue", "long", "center");
            });
        }
        else {
        }
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        //to disable menu, or
        this.menu.enable(false);
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        // to enable menu.
        this.menu.enable(true);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/login/login.html"*/'\n<ion-header >\n\n</ion-header>\n<ion-content class="main">\n\n<img class="img-profile "  src="img/logo.png" />\n  <ion-grid>\n  <form [formGroup]="loginForm"  novalidate>\n\n    <ion-row  class="row-input">\n      <img src="img/1.png" style="height:30px;"/>\n      <ion-input #email formControlName="email" type="email"  placeholder="abc@gmail.com" class="input-email" name="loginForm.email" [(ngModel)]="loginForm.email"  [class.invalid]="!loginForm.controls.email.valid &&  submitAttempt"></ion-input>\n    </ion-row >\n    <ion-row class="error-message" *ngIf="!loginForm.controls.email.valid && error && submitAttempt">\n      <p>{{error}}</p>\n    </ion-row>\n    <ion-row  class="row-input">\n      <img src="img/2.png" style="height:30px;"/>\n\n      <ion-input #password formControlName="password" type="password" placeholder="Password" class="input-pass" name="loginForm.pass" [(ngModel)]="loginForm.pass" [class.invalid]="!loginForm.controls.password.valid && submitAttempt"></ion-input>\n    </ion-row>\n    <ion-row class="error-message" *ngIf="!loginForm.controls.password.valid  &&  submitAttempt && errormsg">\n      <p>{{errormsg}}</p>\n    </ion-row>\n  <ion-row class="row-submit">\n    <button ion-button round outline (click)="loginUser(loginForm.email,loginForm.pass)" class="logincls">\n     Sign in\n    </button>\n  </ion-row>\n  <ion-row>\n  <p (click)="register()" class="registercls">\n    Don\'t have an account?Register Now\n  </p>\n  </ion-row>\n  <!--<ion-row>\n    <p (click)="forgot(loginForm.email)" class="forgetcls">\n      Forgot Password\n    </p>\n  </ion-row>-->\n  </form>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/moc/Desktop/All Projects/Briidgge/Briddgge/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[382]);
//# sourceMappingURL=main.js.map
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class Tawseel {

  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  
  constructor(
    public platform: Platform, 
    public storage: Storage
    // public loadingCtrl: LoadingController,
  ) {
    this.initializeApp();
    // Check if the user has already logged in
    this.storage.get('userId')
    .then((userId) => {
      if (userId){
        this.rootPage = HomePage;
      }
      else{
        this.rootPage = LoginPage;
      }
    })
  }

 initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ApiManager} from '../../providers/api-manager';

import { 
  FormGroup, 
  FormControl, 
  Validators } from '@angular/forms';

import { HomePage} from '../home/home'

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  form        : FormGroup;
  submitted   : boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public storage: Storage,
    public apiManager: ApiManager
    ) {
      this.form = new FormGroup({
        email: new FormControl('',Validators.required),
        password: new FormControl('', Validators.required)
      });
    }

  doLogin(form: FormGroup){
    this.submitted = true;
    if (this.form.valid) {
      let loading = this.loadingCtrl.create();
      loading.present();
      this.apiManager.loginRequest(form.value.email, form.value.password)
          .subscribe((response) => {
            loading.dismiss();
            console.log(response);
          }, (error) => {
            loading.dismiss();
            console.log(error);
          });

      // console.log('Email:'+form.value.email+'Password:'+form.value.password);
    }
    else{
      let errorMessage = "Invaild email format or password is empty. Email should be has domain @berkshireschool.org."
      this.toastCtrl.create({
        message: errorMessage, 
        duration: 2000,
        position: 'middle'
      }).present();
    }
  }
  
  private availableEmail(): boolean {
    let validEmailDomain = "berkshireschool.org";
    return (this.form.value.email.indexOf(validEmailDomain) > -1)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}

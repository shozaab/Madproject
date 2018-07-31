import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class HomePage {

  username : string;
  password : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  login(){
    if(this.username == "shozab" && this.password =="shozab123"){
      const alert = this.alertCtrl.create({
        title: 'Success!',
        subTitle: 'Successfully logged In',
        buttons: ['OK']
      });
      alert.present();
    }
    else{
      const alert = this.alertCtrl.create({
        title: 'Error!',
        subTitle: 'Incorrent Username or Password',
        buttons: ['OK']
      });
      alert.present();
    }
  }
}

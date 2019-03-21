import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public alertController: AlertController, private router: Router) { }
  username = "";
  password = "";


  ngOnInit() {}

  onLogin(){
   
    if(this.username==this.password){
      this.router.navigate(['/register']);
    }

    
    else{
      this.presentAlert();
      this.username = "";
      this.password = "";
    }   
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Hello',
      message: 'username and password should be same.',
      buttons: ['OK']
    });

    await alert.present();
  }

}

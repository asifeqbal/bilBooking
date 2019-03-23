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

    
    else if(this.username!= this.password){
      this.presentAlert();
      //alert("Hi");
    
    }   
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Hello',
      message: this.username,
      buttons: ['OK']
    });

    await alert.present();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //hay que Borrar el correo y costraseña y dejarlo ari usuario:String =""
  Usuario: string = "joseganga@gmail.com";
  Password: string = "hola123";
  inputUsuario: string = '';
  inputPassword: string = '';


  constructor(private alertController: AlertController, private router: Router) { }

  async iniciarSesion() {
    if (this.inputUsuario === this.Usuario && this.inputPassword === this.Password) {
      this.router.navigate(['/home']);
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Usuario o contraseña incorrectos',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  ngOnInit() {
  }

}

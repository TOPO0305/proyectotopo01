import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  //Variales de Registro
  formulario: FormGroup;
  Nombre= "";
  Apellido="";
  Rut= "";
  Correo= "";
  Telefono= "";
  Genero!: number;
  Passw= "";
  
  public get toastController(): ToastController {
    return this._toastController;
  }
  public set toastController(value: ToastController) {
    this._toastController = value;
  }


  constructor(private router: Router,private formBuilder: FormBuilder,private _toastController: ToastController) { 
    this.formulario = this.formBuilder.group({
      Nombre:['',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(12)
      ]],
      Apellido:['',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(12)
      ]],
      Rut:['',[
        Validators.required,
        Validators.maxLength(9)
      ]],
      Correo:['',[
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$')
      ]],
      Telefono:['',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(20),
        Validators.pattern('^[0-9]+$')
      ]],
      Password:['',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')]],
      Genero:['',[Validators.required
        
      ]]
    });
  }

  ngOnInit() {
  }
  //(1)
  IrPaginaPerfil(){
    let navigationextras: NavigationExtras = {
      state:{
        nom: this.Nombre,
        ape: this.Apellido
      }
    }
    this.router.navigate(['/home'], navigationextras);
  }

}

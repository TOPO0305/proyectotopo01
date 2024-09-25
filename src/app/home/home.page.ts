import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
//(1)nombramiento de variables para usarlas y traer datos de una pag a otra
Nombre: string ="";
Apellido: string ="";


constructor(private router: Router, private activedrute: ActivatedRoute) {
  this.activedrute.queryParams.subscribe(param =>{//dar nombre al parametro puede ser cualquiera
    if(this,router.getCurrentNavigation()?.extras.state){
      this.Nombre = this.router.getCurrentNavigation()?.extras?.state?.
      ['nom'];
      this.Apellido = this.router.getCurrentNavigation()?.extras?.state?.
      ['ape'];
    }
  });
 }

}

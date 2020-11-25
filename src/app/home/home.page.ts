import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //CONTROL DE TODO 

  variable = 0;
  variable2 = 0;
  resultado = 0;
  operacion = 0;


  
falso_verdadero = false

alumno = "";
profesor = "";
calificacion = 100;

constructor() {}

sumar (){
  this.resultado = this.variable + this.variable2;
}

multiplicar (){
  this.resultado = this.variable * this.variable2;
}

dividir (){
  this.resultado = this.variable / this.variable2;   
}

restar (){
  this.resultado = this.variable - this.variable2;
}

}

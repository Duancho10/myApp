import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  NOMBRE="";
  
  Nombre= "";
  Email= "";
  Mensaje= "";
  Asunto="";
 



  constructor() { }

  Borrar (){
  this.Nombre= ""
  this.Email= "";
  this.Mensaje= "";
  this.Asunto="";
}
  ngOnInit() {
  }
}

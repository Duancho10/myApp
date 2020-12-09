import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioLoginPageRoutingModule } from './formulario-login-routing.module';

import { FormularioLoginPage } from './formulario-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioLoginPageRoutingModule
  ],
  declarations: [FormularioLoginPage]
})
export class FormularioLoginPageModule {}

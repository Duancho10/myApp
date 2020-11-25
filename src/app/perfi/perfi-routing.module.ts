import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfiPage } from './perfi.page';

const routes: Routes = [
  {
    path: '',
    component: PerfiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfiPageRoutingModule {}

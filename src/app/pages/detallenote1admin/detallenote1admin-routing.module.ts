import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detallenote1adminPage } from './detallenote1admin.page';

const routes: Routes = [
  {
    path: '',
    component: Detallenote1adminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detallenote1adminPageRoutingModule {}

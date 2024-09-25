import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detallenote2adminPage } from './detallenote2admin.page';

const routes: Routes = [
  {
    path: '',
    component: Detallenote2adminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detallenote2adminPageRoutingModule {}

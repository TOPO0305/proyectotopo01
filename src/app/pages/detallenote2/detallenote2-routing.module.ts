import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detallenote2Page } from './detallenote2.page';

const routes: Routes = [
  {
    path: '',
    component: Detallenote2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detallenote2PageRoutingModule {}

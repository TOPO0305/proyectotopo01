import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarnotePage } from './agregarnote.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarnotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarnotePageRoutingModule {}

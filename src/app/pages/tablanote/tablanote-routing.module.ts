import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

import { TablanotePage } from './tablanote.page';

const routes: Routes = [
  {
    path: '',
    component: TablanotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,
    MatButtonModule
  ],
})
export class TablanotePageRoutingModule {}

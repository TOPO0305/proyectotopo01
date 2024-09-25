import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detallenote2adminPageRoutingModule } from './detallenote2admin-routing.module';

import { Detallenote2adminPage } from './detallenote2admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detallenote2adminPageRoutingModule
  ],
  declarations: [Detallenote2adminPage]
})
export class Detallenote2adminPageModule {}

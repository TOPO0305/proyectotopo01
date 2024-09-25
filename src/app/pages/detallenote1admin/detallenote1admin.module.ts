import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detallenote1adminPageRoutingModule } from './detallenote1admin-routing.module';

import { Detallenote1adminPage } from './detallenote1admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detallenote1adminPageRoutingModule
  ],
  declarations: [Detallenote1adminPage]
})
export class Detallenote1adminPageModule {}

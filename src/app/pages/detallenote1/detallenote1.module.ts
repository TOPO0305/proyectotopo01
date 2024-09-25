import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detallenote1PageRoutingModule } from './detallenote1-routing.module';

import { Detallenote1Page } from './detallenote1.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detallenote1PageRoutingModule
  ],
  declarations: [Detallenote1Page]
})
export class Detallenote1PageModule {}

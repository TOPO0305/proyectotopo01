import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detallenote2PageRoutingModule } from './detallenote2-routing.module';

import { Detallenote2Page } from './detallenote2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detallenote2PageRoutingModule
  ],
  declarations: [Detallenote2Page]
})
export class Detallenote2PageModule {}

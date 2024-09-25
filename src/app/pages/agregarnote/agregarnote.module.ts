import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarnotePageRoutingModule } from './agregarnote-routing.module';

import { AgregarnotePage } from './agregarnote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarnotePageRoutingModule
  ],
  declarations: [AgregarnotePage]
})
export class AgregarnotePageModule {}

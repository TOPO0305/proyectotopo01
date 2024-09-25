import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablanotePageRoutingModule } from './tablanote-routing.module';

import { TablanotePage } from './tablanote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablanotePageRoutingModule
  ],
  declarations: [TablanotePage]
})
export class TablanotePageModule {}

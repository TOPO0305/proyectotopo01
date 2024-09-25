import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidepasswordPageRoutingModule } from './olvidepassword-routing.module';

import { OlvidepasswordPage } from './olvidepassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidepasswordPageRoutingModule
  ],
  declarations: [OlvidepasswordPage]
})
export class OlvidepasswordPageModule {}

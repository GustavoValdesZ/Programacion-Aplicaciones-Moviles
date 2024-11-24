import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WukongPageRoutingModule } from './wukong-routing.module';

import { WukongPage } from './wukong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WukongPageRoutingModule
  ],
  declarations: [WukongPage]
})
export class WukongPageModule {}

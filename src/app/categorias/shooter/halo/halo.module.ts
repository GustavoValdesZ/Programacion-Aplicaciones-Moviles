import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HaloPageRoutingModule } from './halo-routing.module';

import { HaloPage } from './halo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HaloPageRoutingModule
  ],
  declarations: [HaloPage]
})
export class HaloPageModule {}

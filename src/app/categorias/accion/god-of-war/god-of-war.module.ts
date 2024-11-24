import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GodOfWarPageRoutingModule } from './god-of-war-routing.module';

import { GodOfWarPage } from './god-of-war.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GodOfWarPageRoutingModule
  ],
  declarations: [GodOfWarPage]
})
export class GodOfWarPageModule {}

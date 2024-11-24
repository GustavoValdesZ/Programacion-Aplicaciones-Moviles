import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SackboyPageRoutingModule } from './sackboy-routing.module';

import { SackboyPage } from './sackboy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SackboyPageRoutingModule
  ],
  declarations: [SackboyPage]
})
export class SackboyPageModule {}

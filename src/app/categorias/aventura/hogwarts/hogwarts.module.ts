import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HogwartsPageRoutingModule } from './hogwarts-routing.module';

import { HogwartsPage } from './hogwarts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HogwartsPageRoutingModule
  ],
  declarations: [HogwartsPage]
})
export class HogwartsPageModule {}

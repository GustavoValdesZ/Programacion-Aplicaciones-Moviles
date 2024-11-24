import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StillwakesPageRoutingModule } from './stillwakes-routing.module';

import { StillwakesPage } from './stillwakes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StillwakesPageRoutingModule
  ],
  declarations: [StillwakesPage]
})
export class StillwakesPageModule {}

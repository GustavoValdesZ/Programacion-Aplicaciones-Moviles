import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Eafc25PageRoutingModule } from './eafc25-routing.module';

import { Eafc25Page } from './eafc25.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Eafc25PageRoutingModule
  ],
  declarations: [Eafc25Page]
})
export class Eafc25PageModule {}

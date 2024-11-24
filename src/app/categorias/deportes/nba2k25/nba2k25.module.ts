import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nba2k25PageRoutingModule } from './nba2k25-routing.module';

import { Nba2k25Page } from './nba2k25.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nba2k25PageRoutingModule
  ],
  declarations: [Nba2k25Page]
})
export class Nba2k25PageModule {}

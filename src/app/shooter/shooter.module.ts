import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShooterPageRoutingModule } from './shooter-routing.module';

import { ShooterPage } from './shooter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShooterPageRoutingModule
  ],
  declarations: [ShooterPage]
})
export class ShooterPageModule {}

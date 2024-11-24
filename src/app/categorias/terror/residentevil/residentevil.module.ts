import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidentevilPageRoutingModule } from './residentevil-routing.module';

import { ResidentevilPage } from './residentevil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResidentevilPageRoutingModule
  ],
  declarations: [ResidentevilPage]
})
export class ResidentevilPageModule {}

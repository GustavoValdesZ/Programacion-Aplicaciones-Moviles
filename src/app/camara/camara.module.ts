import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraPage } from './camara.page';
import { CameraPageRoutingModule } from './camara-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CameraPageRoutingModule
  ],
  declarations: [CameraPage]
})
export class CameraPageModule {}  

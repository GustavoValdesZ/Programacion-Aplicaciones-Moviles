import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CameraPage } from './camara.page';  
import { CameraPageRoutingModule } from './camara-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameraPageRoutingModule,
  ],
  declarations: [CameraPage], 
})
export class CameraPageModule {}

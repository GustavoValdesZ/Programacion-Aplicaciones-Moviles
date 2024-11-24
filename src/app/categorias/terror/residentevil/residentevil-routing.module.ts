import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidentevilPage } from './residentevil.page';

const routes: Routes = [
  {
    path: '',
    component: ResidentevilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidentevilPageRoutingModule {}

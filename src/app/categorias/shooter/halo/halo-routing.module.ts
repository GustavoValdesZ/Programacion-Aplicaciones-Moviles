import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HaloPage } from './halo.page';

const routes: Routes = [
  {
    path: '',
    component: HaloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HaloPageRoutingModule {}

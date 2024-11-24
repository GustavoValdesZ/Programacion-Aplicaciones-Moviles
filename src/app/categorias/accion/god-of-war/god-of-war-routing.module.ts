import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GodOfWarPage } from './god-of-war.page';

const routes: Routes = [
  {
    path: '',
    component: GodOfWarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GodOfWarPageRoutingModule {}

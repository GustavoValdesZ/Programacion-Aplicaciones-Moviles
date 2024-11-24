import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SackboyPage } from './sackboy.page';

const routes: Routes = [
  {
    path: '',
    component: SackboyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SackboyPageRoutingModule {}

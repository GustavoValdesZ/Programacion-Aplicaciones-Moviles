import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Eafc25Page } from './eafc25.page';

const routes: Routes = [
  {
    path: '',
    component: Eafc25Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Eafc25PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StillwakesPage } from './stillwakes.page';

const routes: Routes = [
  {
    path: '',
    component: StillwakesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StillwakesPageRoutingModule {}

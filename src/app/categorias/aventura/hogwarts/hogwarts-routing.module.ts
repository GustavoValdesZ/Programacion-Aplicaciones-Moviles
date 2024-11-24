import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HogwartsPage } from './hogwarts.page';

const routes: Routes = [
  {
    path: '',
    component: HogwartsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HogwartsPageRoutingModule {}

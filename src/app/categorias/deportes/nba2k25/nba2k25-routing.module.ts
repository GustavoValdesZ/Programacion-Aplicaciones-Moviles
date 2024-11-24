import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nba2k25Page } from './nba2k25.page';

const routes: Routes = [
  {
    path: '',
    component: Nba2k25Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nba2k25PageRoutingModule {}

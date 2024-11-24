import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShooterPage } from './shooter.page';

const routes: Routes = [
  {
    path: '',
    component: ShooterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShooterPageRoutingModule {}

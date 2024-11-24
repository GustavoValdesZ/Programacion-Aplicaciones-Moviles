import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodPage } from './cod.page';

const routes: Routes = [
  {
    path: '',
    component: CodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodPageRoutingModule {}

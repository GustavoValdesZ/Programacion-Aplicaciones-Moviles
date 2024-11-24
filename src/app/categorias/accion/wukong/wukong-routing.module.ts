import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WukongPage } from './wukong.page';

const routes: Routes = [
  {
    path: '',
    component: WukongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WukongPageRoutingModule {}

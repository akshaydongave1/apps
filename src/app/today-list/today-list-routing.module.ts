import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodayListPage } from './today-list.page';

const routes: Routes = [
  {
    path: '',
    component: TodayListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodayListPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewCustomerPage } from './add-new-customer.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewCustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewCustomerPageRoutingModule {}

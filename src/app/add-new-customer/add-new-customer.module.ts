import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewCustomerPageRoutingModule } from './add-new-customer-routing.module';

import { AddNewCustomerPage } from './add-new-customer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddNewCustomerPageRoutingModule
  ],
  declarations: [AddNewCustomerPage]
})
export class AddNewCustomerPageModule {}

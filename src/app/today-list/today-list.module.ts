import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodayListPageRoutingModule } from './today-list-routing.module';

import { TodayListPage } from './today-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodayListPageRoutingModule
  ],
  declarations: [TodayListPage]
})
export class TodayListPageModule {}

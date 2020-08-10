import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StockDataTableComponent } from './stock-data-table/stock-data-table.component';


@NgModule({
  declarations: [HomeComponent, StockDataTableComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

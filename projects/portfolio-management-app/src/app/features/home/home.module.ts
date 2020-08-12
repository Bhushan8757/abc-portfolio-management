import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import { ChartsModule } from 'ng2-charts';
import { MatTableModule } from '@angular/material/table';
import { TopCatStockComponent } from './top-cat-stock/top-cat-stock.component';
import { StockTableComponent } from './stock-table/stock-table.component';

@NgModule({
  declarations: [
    HomeComponent,
    StockChartComponent,
    TopCatStockComponent,
    StockTableComponent,
  ],
  imports: [
    HomeRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    ChartsModule,
    MatTableModule,
  ],
})
export class HomeModule {}

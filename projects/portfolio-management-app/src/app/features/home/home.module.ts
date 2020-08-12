import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [HomeComponent, StockChartComponent],
  imports: [HomeRoutingModule, FlexLayoutModule, MatCardModule, ChartsModule],
})
export class HomeModule {}

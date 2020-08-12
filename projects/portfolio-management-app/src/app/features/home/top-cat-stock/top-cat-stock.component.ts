import { Component, OnInit } from '@angular/core';
import { StockDataService } from '../../../shared/stock-data.service';
import { TopCatStockInterface } from './top-cat.interface';
import { Observable } from 'rxjs';

const ELEMENT_DATA: TopCatStockInterface[] = [];

@Component({
  selector: 'abc-pm-top-cat-stock',
  templateUrl: './top-cat-stock.component.html',
  styleUrls: ['./top-cat-stock.component.scss'],
})
export class TopCatStockComponent implements OnInit {
  //users$: Object;
  constructor(private dataObject: StockDataService) {}
  dataElement: any[] = [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    this.dataObject.getFxData().subscribe((data) => {
      this.dataElement = [data];
    });
    setTimeout(() => {
      this.dataSource = this.dataElement[0];
    });
  }
}

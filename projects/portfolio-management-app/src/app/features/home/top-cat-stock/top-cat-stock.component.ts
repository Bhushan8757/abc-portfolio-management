import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  company_name: string;
  ltp: number;
  change: number;
  per_change: number;
  volumes: number;
  low: number;
  high: number;
  past_performance: object;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    company_name: 'Motilal Oswal',
    ltp: 710.45,
    change: 45.45,
    per_change: 10.03,
    volumes: 313200,
    low: 665,
    high: 715,
    past_performance: [
      {
        date: '09-08-2020',
        ltp: 696.95,
        change: 36.25,
        per_change: 6.21,
        volumes: 302000,
        low: 660,
        high: 700,
      },
      {
        date: '08-08-2020',
        ltp: 696.95,
        change: 30.18,
        per_change: 5.8,
        volumes: 300500,
        low: 640,
        high: 699,
      },
      {
        date: '07-08-2020',
        ltp: 655.66,
        change: 25.95,
        per_change: 5.21,
        volumes: 300040,
        low: 610,
        high: 640,
      },
    ],
  },
];

const myData = [1, 2, 3, 4];

@Component({
  selector: 'abc-pm-top-cat-stock',
  templateUrl: './top-cat-stock.component.html',
  styleUrls: ['./top-cat-stock.component.scss'],
})
export class TopCatStockComponent implements OnInit {
  constructor() {}
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {}
}

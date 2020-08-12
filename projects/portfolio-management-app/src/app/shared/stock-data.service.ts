import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StockDataService {
  stockUrl =
    'https://gist.githubusercontent.com/Bhushan8757/1f84f7a9c6df91bdfdf6026c635155dc/raw/dbccc0d39188b99bda098d8676b48a5e00a3ae27/stock_profile.json';
  constructor(private http: HttpClient) {}

  getFxData() {
    return this.http.get(this.stockUrl);
  }
}

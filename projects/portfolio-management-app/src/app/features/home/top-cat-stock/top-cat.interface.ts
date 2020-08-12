export interface TopCatStockInterface {
  company_name: string;
  ltp: number;
  change: number;
  per_change: number;
  volumes: number;
  low: number;
  high: number;
  past_performance: object;
}

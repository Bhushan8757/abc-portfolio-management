import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDataTableComponent } from './stock-data-table.component';

describe('StockDataTableComponent', () => {
  let component: StockDataTableComponent;
  let fixture: ComponentFixture<StockDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

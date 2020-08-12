import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCatStockComponent } from './top-cat-stock.component';

describe('TopCatStockComponent', () => {
  let component: TopCatStockComponent;
  let fixture: ComponentFixture<TopCatStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCatStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCatStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

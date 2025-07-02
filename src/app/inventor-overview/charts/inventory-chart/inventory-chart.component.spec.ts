import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryChartComponent } from './inventory-chart.component';

describe('InventoryChartComponent', () => {
  let component: InventoryChartComponent;
  let fixture: ComponentFixture<InventoryChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

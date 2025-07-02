import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyConsumptionReportComponent } from './monthly-consumption-report.component';

describe('MonthlyConsumptionReportComponent', () => {
  let component: MonthlyConsumptionReportComponent;
  let fixture: ComponentFixture<MonthlyConsumptionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyConsumptionReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyConsumptionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

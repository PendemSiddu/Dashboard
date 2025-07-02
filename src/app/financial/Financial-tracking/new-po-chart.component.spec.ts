import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPoChartComponent } from './new-po-chart.component';

describe('NewPoChartComponent', () => {
  let component: NewPoChartComponent;
  let fixture: ComponentFixture<NewPoChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPoChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

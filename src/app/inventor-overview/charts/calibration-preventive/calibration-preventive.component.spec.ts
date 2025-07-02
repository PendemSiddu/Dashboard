import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationPreventiveComponent } from './calibration-preventive.component';

describe('CalibrationPreventiveComponent', () => {
  let component: CalibrationPreventiveComponent;
  let fixture: ComponentFixture<CalibrationPreventiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibrationPreventiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalibrationPreventiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

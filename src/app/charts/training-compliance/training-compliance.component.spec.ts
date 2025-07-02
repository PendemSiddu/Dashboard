import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingComplianceComponent } from './training-compliance.component';

describe('TrainingComplianceComponent', () => {
  let component: TrainingComplianceComponent;
  let fixture: ComponentFixture<TrainingComplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingComplianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

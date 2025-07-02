import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramMetricsComponent } from './program-metrics.component';

describe('ProgramMetricsComponent', () => {
  let component: ProgramMetricsComponent;
  let fixture: ComponentFixture<ProgramMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramMetricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Financial2Component } from './financial2.component'
describe('FinancialComponent', () => {
  let component: Financial2Component;
  let fixture: ComponentFixture<Financial2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Financial2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Financial2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

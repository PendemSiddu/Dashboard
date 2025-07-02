import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPoChart2Component } from './new-po-chart2.component';

describe('NewPoChart2Component', () => {
  let component: NewPoChart2Component;
  let fixture: ComponentFixture<NewPoChart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPoChart2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPoChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

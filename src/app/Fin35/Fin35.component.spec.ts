import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin35Component } from './Fin35.component';

describe('Fin35Component', () => {
  let component: Fin35Component;
  let fixture: ComponentFixture<Fin35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin35Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin3Component } from './Fin3.component';

describe('Fin3Component', () => {
  let component: Fin3Component;
  let fixture: ComponentFixture<Fin3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

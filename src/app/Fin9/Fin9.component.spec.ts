import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin9Component } from './Fin9.component';

describe('Fin9Component', () => {
  let component: Fin9Component;
  let fixture: ComponentFixture<Fin9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

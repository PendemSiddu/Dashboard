import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin33Component } from './Fin33.component';

describe('Fin33Component', () => {
  let component: Fin33Component;
  let fixture: ComponentFixture<Fin33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin33Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

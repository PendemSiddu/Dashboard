import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin10Component } from './Fin10.component';

describe('Fin10Component', () => {
  let component: Fin10Component;
  let fixture: ComponentFixture<Fin10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

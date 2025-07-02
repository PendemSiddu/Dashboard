import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin4Component } from './Fin4.component';

describe('Fin4Component', () => {
  let component: Fin4Component;
  let fixture: ComponentFixture<Fin4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

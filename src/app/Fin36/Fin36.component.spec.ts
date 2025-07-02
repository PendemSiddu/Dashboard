import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin36Component } from './Fin36.component';

describe('Fin32Component', () => {
  let component: Fin36Component;
  let fixture: ComponentFixture<Fin36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin36Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

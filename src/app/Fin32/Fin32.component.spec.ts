import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin32Component } from './Fin32.component';

describe('Fin32Component', () => {
  let component: Fin32Component;
  let fixture: ComponentFixture<Fin32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin32Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

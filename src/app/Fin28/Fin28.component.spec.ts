import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin28Component } from './Fin28.component';

describe('Fin28Component', () => {
  let component: Fin28Component;
  let fixture: ComponentFixture<Fin28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin28Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin8Component } from './Fin8.component';

describe('Fin8Component', () => {
  let component: Fin8Component;
  let fixture: ComponentFixture<Fin8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

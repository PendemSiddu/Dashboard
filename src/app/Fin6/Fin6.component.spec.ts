import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin6Component } from './Fin6.component';

describe('Fin6Component', () => {
  let component: Fin6Component;
  let fixture: ComponentFixture<Fin6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

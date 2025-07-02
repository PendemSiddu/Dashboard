import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin7Component } from './Fin7.component';

describe('Fin7Component', () => {
  let component: Fin7Component;
  let fixture: ComponentFixture<Fin7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin1Component } from './Fin1.component';

describe('Fin1Component', () => {
  let component: Fin1Component;
  let fixture: ComponentFixture<Fin1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

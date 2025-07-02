import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin27Component } from './Fin27.component';

describe('Fin27Component', () => {
  let component: Fin27Component;
  let fixture: ComponentFixture<Fin27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin27Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

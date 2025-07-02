import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin30Component } from './Fin30.component';

describe('Fin30Component', () => {
  let component: Fin30Component;
  let fixture: ComponentFixture<Fin30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin30Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

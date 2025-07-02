import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin38Component } from './Fin38.component';

describe('Fin38Component', () => {
  let component: Fin38Component;
  let fixture: ComponentFixture<Fin38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin38Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

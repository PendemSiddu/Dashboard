import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin34Component } from './Fin34.component';

describe('Fin34Component', () => {
  let component: Fin34Component;
  let fixture: ComponentFixture<Fin34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin34Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

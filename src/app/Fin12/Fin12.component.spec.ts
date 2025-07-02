import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin12Component } from './Fin12.component';

describe('Fin12Component', () => {
  let component: Fin12Component;
  let fixture: ComponentFixture<Fin12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

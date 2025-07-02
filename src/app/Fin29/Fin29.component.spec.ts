import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin29Component } from './Fin29.component';

describe('Fin29Component', () => {
  let component: Fin29Component;
  let fixture: ComponentFixture<Fin29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin29Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin37Component } from './Fin37.component';

describe('Fin37Component', () => {
  let component: Fin37Component;
  let fixture: ComponentFixture<Fin37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin37Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

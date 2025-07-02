import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin25Component } from './Fin25.component';

describe('Fin25Component', () => {
  let component: Fin25Component;
  let fixture: ComponentFixture<Fin25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin25Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

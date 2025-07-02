import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin21Component } from './Fin21.component';

describe('Fin21Component', () => {
  let component: Fin21Component;
  let fixture: ComponentFixture<Fin21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

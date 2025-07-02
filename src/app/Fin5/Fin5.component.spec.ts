import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin5Component } from './Fin5.component';

describe('Fin5Component', () => {
  let component: Fin5Component;
  let fixture: ComponentFixture<Fin5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

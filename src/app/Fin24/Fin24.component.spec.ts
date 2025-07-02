import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin24Component } from './Fin24.component';

describe('Fin24Component', () => {
  let component: Fin24Component;
  let fixture: ComponentFixture<Fin24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin24Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

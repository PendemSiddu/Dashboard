import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin31Component } from './Fin31.component';

describe('Fin26Component', () => {
  let component: Fin31Component;
  let fixture: ComponentFixture<Fin31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin31Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

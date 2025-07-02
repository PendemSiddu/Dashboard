import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin22Component } from './Fin22.component';

describe('Fin22Component', () => {
  let component: Fin22Component;
  let fixture: ComponentFixture<Fin22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

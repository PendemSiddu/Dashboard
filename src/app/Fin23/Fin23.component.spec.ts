import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin23Component } from './Fin23.component';

describe('Fin22Component', () => {
  let component: Fin23Component;
  let fixture: ComponentFixture<Fin23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

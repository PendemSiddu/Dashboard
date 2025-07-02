import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin11Component } from './Fin11.component';

describe('Fin11Component', () => {
  let component: Fin11Component;
  let fixture: ComponentFixture<Fin11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

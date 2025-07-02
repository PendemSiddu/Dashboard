import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin26Component } from './Fin26.component';

describe('Fin26Component', () => {
  let component: Fin26Component;
  let fixture: ComponentFixture<Fin26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin26Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin2Component } from './Fin2.component';

describe('Fin2Component', () => {
  let component: Fin2Component;
  let fixture: ComponentFixture<Fin2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fin2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmiComponent } from './Gmi.component';

describe('GmiComponent', () => {
  let component: GmiComponent;
  let fixture: ComponentFixture<GmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

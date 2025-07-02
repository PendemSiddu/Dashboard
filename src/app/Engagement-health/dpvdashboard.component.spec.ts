import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpvdashboardComponent } from './dpvdashboard.component';

describe('DpvdashboardComponent', () => {
  let component: DpvdashboardComponent;
  let fixture: ComponentFixture<DpvdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpvdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DpvdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitePerformaceComponent } from './site-performace.component';

describe('SitePerformaceComponent', () => {
  let component: SitePerformaceComponent;
  let fixture: ComponentFixture<SitePerformaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitePerformaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitePerformaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

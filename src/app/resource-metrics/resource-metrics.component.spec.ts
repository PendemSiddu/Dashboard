import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceMetricsComponent } from './resource-metrics.component';

describe('ResourceMetricsComponent', () => {
  let component: ResourceMetricsComponent;
  let fixture: ComponentFixture<ResourceMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceMetricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

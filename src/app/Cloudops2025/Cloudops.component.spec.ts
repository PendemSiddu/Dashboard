import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudopsComponent } from './Cloudops.component';

describe('CloudopsComponent', () => {
  let component: CloudopsComponent;
  let fixture: ComponentFixture<CloudopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileopsComponent } from './Mobileops.component';

describe('MobileopsComponent', () => {
  let component: MobileopsComponent;
  let fixture: ComponentFixture<MobileopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

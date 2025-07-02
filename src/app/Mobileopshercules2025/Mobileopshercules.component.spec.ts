import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileopsherculesComponent } from './Mobileopshercules.component';

describe('MobileopsherculesComponent', () => {
  let component: MobileopsherculesComponent;
  let fixture: ComponentFixture<MobileopsherculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileopsherculesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileopsherculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanaiComponent } from './Lanai.component';

describe('LanaiComponent', () => {
  let component: LanaiComponent;
  let fixture: ComponentFixture<LanaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

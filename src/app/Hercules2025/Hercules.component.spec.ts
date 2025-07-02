import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerculesComponent } from './Hercules.component';

describe('HerculesComponent', () => {
  let component: HerculesComponent;
  let fixture: ComponentFixture<HerculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerculesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

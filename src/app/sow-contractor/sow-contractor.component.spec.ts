import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SowContractorComponent } from './sow-contractor.component';

describe('SowContractorComponent', () => {
  let component: SowContractorComponent;
  let fixture: ComponentFixture<SowContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SowContractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SowContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

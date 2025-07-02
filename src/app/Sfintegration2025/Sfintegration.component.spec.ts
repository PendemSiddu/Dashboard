import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfintegrationComponent } from './Sfintegration.component';

describe('SfintegrationComponent', () => {
  let component: SfintegrationComponent;
  let fixture: ComponentFixture<SfintegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfintegrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfintegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

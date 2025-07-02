import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IptComponent } from './Ipt.component';

describe('IptComponent', () => {
  let component: IptComponent;
  let fixture: ComponentFixture<IptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

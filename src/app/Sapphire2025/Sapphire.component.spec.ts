import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapphireComponent } from './Sapphire.component';

describe('SapphireComponent', () => {
  let component: SapphireComponent;
  let fixture: ComponentFixture<SapphireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SapphireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SapphireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

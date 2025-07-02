import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyraComponent } from './Lyra.component';

describe('LyraComponent', () => {
  let component: LyraComponent;
  let fixture: ComponentFixture<LyraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

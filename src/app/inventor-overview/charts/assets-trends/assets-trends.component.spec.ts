import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsTrendsComponent } from './assets-trends.component';

describe('AssetsTrendsComponent', () => {
  let component: AssetsTrendsComponent;
  let fixture: ComponentFixture<AssetsTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsTrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

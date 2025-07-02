import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorOverviewComponent } from './inventor-overview.component';

describe('InventorOverviewComponent', () => {
  let component: InventorOverviewComponent;
  let fixture: ComponentFixture<InventorOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventorOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

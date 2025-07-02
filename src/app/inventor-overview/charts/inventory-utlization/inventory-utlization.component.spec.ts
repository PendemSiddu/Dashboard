import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryUtlizationComponent } from './inventory-utlization.component';

describe('InventoryUtlizationComponent', () => {
  let component: InventoryUtlizationComponent;
  let fixture: ComponentFixture<InventoryUtlizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryUtlizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryUtlizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

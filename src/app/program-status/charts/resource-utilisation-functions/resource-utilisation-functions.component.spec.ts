import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceUtilisationFunctionsComponent } from './resource-utilisation-functions.component';

describe('ResourceUtilisationFunctionsComponent', () => {
  let component: ResourceUtilisationFunctionsComponent;
  let fixture: ComponentFixture<ResourceUtilisationFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceUtilisationFunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceUtilisationFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

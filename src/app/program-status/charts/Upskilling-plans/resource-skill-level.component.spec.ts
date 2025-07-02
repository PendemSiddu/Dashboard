import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceSkillLevelComponent } from './resource-skill-level.component';

describe('ResourceSkillLevelComponent', () => {
  let component: ResourceSkillLevelComponent;
  let fixture: ComponentFixture<ResourceSkillLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceSkillLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceSkillLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtmsComponent } from './Artms.component';

describe('ArtmsComponent', () => {
  let component: ArtmsComponent;
  let fixture: ComponentFixture<ArtmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

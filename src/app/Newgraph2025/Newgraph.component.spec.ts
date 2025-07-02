import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewgraphComponent } from './Newgraph.component';


describe('NewgraphComponent', () => {
  let component: NewgraphComponent;
  let fixture: ComponentFixture<NewgraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewgraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

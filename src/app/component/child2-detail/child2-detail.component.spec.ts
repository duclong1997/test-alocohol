import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2DetailComponent } from './child2-detail.component';

describe('Child2DetailComponent', () => {
  let component: Child2DetailComponent;
  let fixture: ComponentFixture<Child2DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child2DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child2DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1DetailComponent } from './child1-detail.component';

describe('Child1DetailComponent', () => {
  let component: Child1DetailComponent;
  let fixture: ComponentFixture<Child1DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child1DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

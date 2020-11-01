import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCptTwoComponent } from './dynamic-cpt-two.component';

describe('DynamicCptTwoComponent', () => {
  let component: DynamicCptTwoComponent;
  let fixture: ComponentFixture<DynamicCptTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicCptTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCptTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

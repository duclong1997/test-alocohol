import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCptOneComponent } from './dynamic-cpt-one.component';

describe('DynamicCptOneComponent', () => {
  let component: DynamicCptOneComponent;
  let fixture: ComponentFixture<DynamicCptOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicCptOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCptOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

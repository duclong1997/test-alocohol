import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCptAngularIvyComponent } from './dynamic-cpt-angular-ivy.component';

describe('DynamicCptAngularIvyComponent', () => {
  let component: DynamicCptAngularIvyComponent;
  let fixture: ComponentFixture<DynamicCptAngularIvyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicCptAngularIvyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCptAngularIvyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

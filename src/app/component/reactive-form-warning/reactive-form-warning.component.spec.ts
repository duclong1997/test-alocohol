import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormWarningComponent } from './reactive-form-warning.component';

describe('ReactiveFormWarningComponent', () => {
  let component: ReactiveFormWarningComponent;
  let fixture: ComponentFixture<ReactiveFormWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

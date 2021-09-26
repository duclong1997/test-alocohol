import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubcribeComponentComponent } from './unsubcribe-component.component';

describe('UnsubcribeComponentComponent', () => {
  let component: UnsubcribeComponentComponent;
  let fixture: ComponentFixture<UnsubcribeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsubcribeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubcribeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

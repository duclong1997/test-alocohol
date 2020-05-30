import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaGraphyComponent } from './corona-graphy.component';

describe('CoronaGraphyComponent', () => {
  let component: CoronaGraphyComponent;
  let fixture: ComponentFixture<CoronaGraphyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaGraphyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaGraphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

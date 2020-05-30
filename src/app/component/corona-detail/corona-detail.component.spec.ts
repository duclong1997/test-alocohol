import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaDetailComponent } from './corona-detail.component';

describe('CoronaDetailComponent', () => {
  let component: CoronaDetailComponent;
  let fixture: ComponentFixture<CoronaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

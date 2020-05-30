import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaDetailCoutryComponent } from './corona-detail-coutry.component';

describe('CoronaDetailCoutryComponent', () => {
  let component: CoronaDetailCoutryComponent;
  let fixture: ComponentFixture<CoronaDetailCoutryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaDetailCoutryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaDetailCoutryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaCountryComponent } from './corona-country.component';

describe('CoronaCountryComponent', () => {
  let component: CoronaCountryComponent;
  let fixture: ComponentFixture<CoronaCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

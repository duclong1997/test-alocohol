import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCoronaConfirmedComponent } from './chart-corona-confirmed.component';

describe('ChartCoronaConfirmedComponent', () => {
  let component: ChartCoronaConfirmedComponent;
  let fixture: ComponentFixture<ChartCoronaConfirmedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartCoronaConfirmedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCoronaConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

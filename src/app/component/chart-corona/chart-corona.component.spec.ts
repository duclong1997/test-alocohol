import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCoronaComponent } from './chart-corona.component';

describe('ChartCoronaComponent', () => {
  let component: ChartCoronaComponent;
  let fixture: ComponentFixture<ChartCoronaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartCoronaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCoronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

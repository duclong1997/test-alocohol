import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailForcastComponent } from './detail-forcast.component';

describe('DetailForcastComponent', () => {
  let component: DetailForcastComponent;
  let fixture: ComponentFixture<DetailForcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailForcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailForcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

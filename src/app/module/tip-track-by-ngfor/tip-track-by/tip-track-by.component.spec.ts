import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipTrackByComponent } from './tip-track-by.component';

describe('TipTrackByComponent', () => {
  let component: TipTrackByComponent;
  let fixture: ComponentFixture<TipTrackByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipTrackByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipTrackByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

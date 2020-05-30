import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PamameterComponent } from './pamameter.component';

describe('PamameterComponent', () => {
  let component: PamameterComponent;
  let fixture: ComponentFixture<PamameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PamameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PamameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

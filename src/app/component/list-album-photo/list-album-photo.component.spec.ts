import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlbumPhotoComponent } from './list-album-photo.component';

describe('ListAlbumPhotoComponent', () => {
  let component: ListAlbumPhotoComponent;
  let fixture: ComponentFixture<ListAlbumPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAlbumPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAlbumPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

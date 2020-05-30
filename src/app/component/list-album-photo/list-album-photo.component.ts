import { Component, OnInit, Input } from '@angular/core';
import { PhotoService } from 'src/app/service/photo/photo.service';

@Component({
  selector: 'app-list-album-photo',
  templateUrl: './list-album-photo.component.html',
  styleUrls: ['./list-album-photo.component.css']
})
export class ListAlbumPhotoComponent implements OnInit {

  @Input('idAlbum') public valueIdAlbum : any;
  private listAlbum: any;
  private errorMess: any;
  constructor(private photoService : PhotoService) { }

  ngOnInit() {
    this.photoService.getListPhotoByAlbum(this.valueIdAlbum).
    subscribe(data => this.listAlbum = data,
      error => this.errorMess =error);
  }

}

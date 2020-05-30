import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/service/photo/photo.service';

@Component({
  selector: 'app-list-photo',
  templateUrl: './list-photo.component.html',
  styleUrls: ['./list-photo.component.css']
})
export class ListPhotoComponent implements OnInit {

  private lstPhoto : any;
  private messageError : any;
  constructor(private photoService :PhotoService) { }

  ngOnInit() {
    this.photoService.getListPhoto().subscribe(data => this.lstPhoto = data,
      error => this.messageError = error);
  }

}

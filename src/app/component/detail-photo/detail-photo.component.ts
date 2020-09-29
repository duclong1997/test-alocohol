import { Component, OnInit } from "@angular/core";
import { PhotoService } from "src/app/service/photo/photo.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { error } from "protractor";
import { PhotoRes } from "src/app/service/photo/entity/res/photoRes";

@Component({
  selector: "app-detail-photo",
  templateUrl: "./detail-photo.component.html",
  styleUrls: ["./detail-photo.component.css"],
})
export class DetailPhotoComponent implements OnInit {
  detailPhoto: any;
  id: any;
  errorMess: any;
  idAlbum: any;
  lstPhoto: any;
  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.id = parseInt(param.get("id"));
      this.photoService.getPhotoById(this.id).subscribe(
        (data) => (this.detailPhoto = data),
        (error) => (this.errorMess = error)
      );
      this.idAlbum = parseInt(param.get("idAlbum"));
    });
  }
}

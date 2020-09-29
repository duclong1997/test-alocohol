import { Component, OnInit, Output } from "@angular/core";
import { AlbumService } from "src/app/service/album/album.service";
import { AlbumRes } from "src/app/service/album/entity/res/albumRes";

@Component({
  selector: "app-list-album",
  templateUrl: "./list-album.component.html",
  styleUrls: ["./list-album.component.css"],
})
export class ListAlbumComponent implements OnInit {
  listAlbum: any;
  errorMess: any;
  valueSearch: any;
  listSearch = [];
  messageError: "";

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.albumService.getListAlbum().subscribe(
      (data) => {
        this.listAlbum = data;
      },
      (error) => (this.errorMess = error)
    );
  }

  // value from component seach (child) to list-album (parent)
  getValueSearch(event): void {
    this.valueSearch = event;
    this.listSearch = [];
    this.albumService.getListAlbum().subscribe((data) => {
      this.listAlbum = data;
      for (let i = 0; i < this.listAlbum.length; i++) {
        if (this.valueSearch === "") {
          this.listSearch = data;
          break;
        } else if (this.listAlbum[i].title.includes(this.valueSearch)) {
          this.listSearch.push(this.listAlbum[i]);
        }
      }

      this.listAlbum = this.listSearch;
    });
  }
}

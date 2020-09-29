import { Component, OnInit } from "@angular/core";
import { PosterService } from "src/app/service/post/poster.service";

@Component({
  selector: "app-list-poster",
  templateUrl: "./list-poster.component.html",
  styleUrls: ["./list-poster.component.css"],
})
export class ListPosterComponent implements OnInit {
  posters = [];
  errorMessage: string;
  constructor(private posterService: PosterService) {}

  ngOnInit() {
    this.posterService.getListPoster().subscribe(
      (data) => (this.posters = data),
      (error) => (this.errorMessage = error)
    );
  }
}

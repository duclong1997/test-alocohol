import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tip-track-by",
  templateUrl: "./tip-track-by.component.html",
  styleUrls: ["./tip-track-by.component.css"],
})
export class TipTrackByComponent implements OnInit {
  lst = [];

  constructor() {}

  ngOnInit() {
    this.lst = [
      {
        id: 1,
        name: "long1",
      },
      {
        id: 2,
        name: "long2",
      },
      {
        id: 3,
        name: "long3",
      },
      {
        id: 4,
        name: "long4",
      },
    ];
  }

  identify(index, item) {
    return item.id;
  }

  insertNew() {
    this.lst = [
      {
        id: 1,
        name: "long1",
      },
      {
        id: 2,
        name: "long2",
      },
      {
        id: 3,
        name: "long3",
      },
      {
        id: 4,
        name: "long4",
      },
      {
        id: 5,
        name: "long5",
      },
    ];
  }

  update(id: number) {
    const index = this.lst.findIndex((el) => el.id === id);
    this.lst[index] = { ...this.lst[index], name: "long helo" };
  }
}

import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-dynamic-two",
  templateUrl: "./dynamic-two.component.html",
  styleUrls: ["./dynamic-two.component.css"],
})
export class DynamicTwoComponent implements OnInit {
  @Input() data: string;
  @Output() sendData = new EventEmitter<string>(null);
  constructor() {}

  ngOnInit() {}

  sendSecret() {
    this.sendData.emit("Hello world");
  }
}

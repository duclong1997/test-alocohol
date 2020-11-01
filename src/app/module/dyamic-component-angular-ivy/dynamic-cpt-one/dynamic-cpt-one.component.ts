import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-dynamic-cpt-one",
  templateUrl: "./dynamic-cpt-one.component.html",
  styleUrls: ["./dynamic-cpt-one.component.css"],
})
export class DynamicCptOneComponent implements OnInit {
  @Input() data = "";
  constructor() {}

  ngOnInit() {}
}

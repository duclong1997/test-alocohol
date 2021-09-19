import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reactive-form-warning",
  templateUrl: "./reactive-form-warning.component.html",
  styleUrls: ["./reactive-form-warning.component.css"],
})
export class ReactiveFormWarningComponent implements OnInit {
  // khoi tao bien boolean check disable/enable
  disabledName = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: "",
    });
  }
}

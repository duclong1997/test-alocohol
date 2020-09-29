import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-test-reactive-form",
  templateUrl: "./test-reactive-form.component.html",
  styleUrls: ["./test-reactive-form.component.css"],
})
export class TestReactiveFormComponent implements OnInit {
  registerFrom: FormGroup;

  // sử dụng FormBuilder giúp dễ dành trong biệc khởi tạo formcontrol không cần sử dụng new
  constructor(private bf: FormBuilder) {}

  ngOnInit() {
    this.registerFrom = this.bf.group({
      username: "",
      password: "",
    });
  }

  viewRegister() {
    console.log(this.registerFrom);
  }
}

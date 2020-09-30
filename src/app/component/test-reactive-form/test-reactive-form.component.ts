import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-test-reactive-form",
  templateUrl: "./test-reactive-form.component.html",
  styleUrls: ["./test-reactive-form.component.css"],
})
export class TestReactiveFormComponent implements OnInit {
  signInForm: FormGroup;

  // sử dụng FormBuilder giúp dễ dành trong biệc khởi tạo formcontrol không cần sử dụng new
  constructor(private bf: FormBuilder) {}

  ngOnInit() {
    this.signInForm = this.bf.group({
      username: "",
      password: "",
    });
  }

  viewRegister() {
    console.log(this.signInForm.value);
  }

  setvalue() {
    // set value thì đòi hỏi phải set toàn bộ các giá trị của reactiveform
    // patchValue thì sẽ set value mới cho form control mà mình mong muốn
    this.signInForm.patchValue({
      username: "helo world!",
    });
  }
}

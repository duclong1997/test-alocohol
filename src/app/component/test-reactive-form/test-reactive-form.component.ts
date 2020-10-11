import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { filter, startWith, switchMap, take, tap } from "rxjs/operators";
import { ApiTestService } from "src/app/service/api-test/api-test.service";
import { validateControlsValue } from "src/app/validator/confirm-password.validator";
import { userAsyncValidator } from "src/app/validator/user-async.validator";
import { NoWhitespaceValidator } from "../../validator/no-whitespace.validator";
@Component({
  selector: "app-test-reactive-form",
  templateUrl: "./test-reactive-form.component.html",
  styleUrls: ["./test-reactive-form.component.css"],
})
export class TestReactiveFormComponent implements OnInit {
  signInForm: FormGroup;

  formSubmit$ = new Subject<any>();

  // sử dụng FormBuilder giúp dễ dành trong biệc khởi tạo formcontrol không cần sử dụng new
  constructor(
    private bf: FormBuilder,
    private apiTestService: ApiTestService
  ) {}

  ngOnInit() {
    this.initFormSignIn();
    // filter async validator submit
    this.filterFormSubmit();
  }

  initFormSignIn() {
    this.signInForm = this.bf.group(
      {
        // cú pháp khi khởi tạo formControl trong group với FormBuilder sẽ truyền vào 1 mảng với 3 phần tử
        // 1: giá trị mặc định
        // 2: sync validator
        // 3: async validator
        username: [
          // value default
          "value",
          // sync validator
          Validators.compose([Validators.required, Validators.minLength(6)]),
          // async validator
          Validators.composeAsync([]),
        ],

        // way 1: group nhiều validator sử dụng với []
        password: ["", [Validators.required, Validators.email]],
        confirmPassword: ["", [Validators.required, Validators.email]],
        // from group
        address: this.bf.group({
          // custom validator (sync validator) sử dụng với function
          street: ["", Validators.compose([NoWhitespaceValidator()])],
          // way 2: group nhiều sử dụng Validators.compose
          // Validator.compose: được sử dụng để kết hợp nhiều validator lại với nhau nếu như cụm validator được sử dụng
          // nhiều lần
          city: [
            "",
            Validators.compose([
              Validators.required,
              Validators.minLength(6),
              Validators.pattern(/^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/),
            ]),
          ],
        }),
        // form array have element is group
        elements: this.bf.array([]),

        formAsync: this.bf.group({
          // way 1: async Validator with directive
          // sử dụng directive implements AsyncValidator
          // trên template sẽ call directive đó để thực hiện validator
          nameAsync: [
            "",
            Validators.compose([Validators.required, Validators.minLength(2)]),
          ],
          // way 2: async validator with function
          nameAsync2: [
            "",
            Validators.compose([Validators.required, Validators.minLength(2)]),
            Validators.composeAsync([userAsyncValidator(this.apiTestService)]),
          ],
        }),
      },
      // validator 2 controls in reactive form
      {
        validators: validateControlsValue("password", "confirmPassword"),
      }
    );
  }

  filterFormSubmit() {
    this.formSubmit$
      .pipe(
        tap(() => this.signInForm.markAsDirty()),
        switchMap(() =>
          this.signInForm.statusChanges.pipe(
            startWith(this.signInForm.status),
            filter((status) => status !== "PENDING"),
            take(1)
          )
        ),
        filter((status) => status === "VALID")
      )
      .subscribe((validationSuccessful) => this.viewRegister());
  }

  child() {
    return this.bf.group({
      name: [""],
      id: [0],
    });
  }

  // define elements array in group control
  elements() {
    return this.signInForm.get("elements") as FormArray;
  }

  // add element
  addElement() {
    this.elements().push(this.child());
  }

  // remove element
  removeElement(i: number) {
    this.elements().removeAt(i);
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

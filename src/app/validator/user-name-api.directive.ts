import { Directive } from "@angular/core";
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ApiTestService } from "../service/api-test/api-test.service";

@Directive({
  selector: "[appUserNameApi]",
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: UserNameApiDirective,
      multi: true,
    },
  ],
})
export class UserNameApiDirective implements AsyncValidator {
  constructor(private apiTestService: ApiTestService) {}

  validate(
    control: AbstractControl
  ): Promise<ValidationErrors> | Observable<ValidationErrors> {
    return this.apiTestService.validateUsernameAsync(control.value).pipe(
      map((isValid) => {
        if (isValid) {
          return null;
        }
        return {
          usernameDuplicated: true,
        };
      })
    );
  }
}

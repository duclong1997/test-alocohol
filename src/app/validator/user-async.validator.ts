import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ApiTestService } from "../service/api-test/api-test.service";

export function userAsyncValidator(
  apiTestService: ApiTestService
): AsyncValidatorFn {
  return (
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return apiTestService.validateUsernameAsync(control.value).pipe(
      map((isValid) => {
        if (isValid) {
          return null;
        }
        return {
          usernameDuplicated: true,
        };
      })
    );
  };
}

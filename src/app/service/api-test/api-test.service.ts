import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ApiTestService {
  constructor() {}

  validateUsernameAsync(username: string): Observable<boolean> {
    console.log("Api test");
    const existedUser = ["trungvo", "tieppt", "chautran"];
    const isValid = existedUser.every((x) => x !== username);
    return of(isValid).pipe(delay(1000));
  }
}

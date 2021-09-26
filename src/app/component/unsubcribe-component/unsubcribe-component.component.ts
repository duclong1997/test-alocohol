import { Component, OnDestroy, OnInit } from "@angular/core";
import { of, Subject } from "rxjs";
import { flatMap, takeUntil } from "rxjs/operators";
import { UserService } from "src/app/service/user/user.service";
import { DestroyService } from "./../../service/destroy.service";

@Component({
  selector: "app-unsubcribe-component",
  templateUrl: "./unsubcribe-component.component.html",
  styleUrls: ["./unsubcribe-component.component.css"],
})
export class UnsubcribeComponentComponent implements OnInit, OnDestroy {
  // way 2: sử dụng operator takeUntil
  destroyed$ = new Subject<void>();

  constructor(
    private userService: UserService,
    private destroyService: DestroyService
  ) {}

  ngOnInit() {
    this.userService
      .getDetail()
      .pipe(
        flatMap((res) => {
          return of(res);
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe((data) => {
        console.log("data:", data);
      });

    // way 3: sử dụng service có rằng buộc là life cycle giống như component
    this.getWay3();
  }

  getWay3() {
    this.userService
      .getDetail()
      .pipe(
        flatMap((res) => {
          return of(res);
        }),
        takeUntil(this.destroyService.destroyed$)
      )
      .subscribe((data) => {
        console.log("data: ", data);
      });
  }

  ngOnDestroy(): void {
    // ngắt steam
    this.destroyed$.next();
    this.destroyed$.complete(); // có thể bỏ qua dòng này
  }
}

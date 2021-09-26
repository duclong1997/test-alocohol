import { Injectable, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

// way 3: tạo service riêng nhằm mục đích sẽ unsubcrite khi component OnDestroy
// service này sẽ có rằng buộc là life cycle giống như component
// lưu ý: not root scope
@Injectable()
export class DestroyService implements OnDestroy {
  public destroyed$ = new Subject<void>();
  constructor() {}

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

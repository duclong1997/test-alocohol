import { Directive, Input } from "@angular/core";
import { NgControl } from "@angular/forms";

// TODO: directive này chỉ áp dụng với khi dùng chung với formControlName directive hoặc formControl directive
// => khi disable FormControl trên template => dùng [appDisabledControl] thay thế cho [disabled]
@Directive({
  selector: "([formControlName], [formControl])[appDisabledControl]",
})
export class DisabledControlDirective {
  @Input() set appDisabledControl(state: boolean) {
    const action = state ? "disable" : "enable";
    this.ngControl.control[action]();
  }

  constructor(private readonly ngControl: NgControl) {}
}

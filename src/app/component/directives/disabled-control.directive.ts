import { Directive, Input } from "@angular/core";
import { NgControl } from "@angular/forms";

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

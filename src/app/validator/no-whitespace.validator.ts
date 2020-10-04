import { AbstractControl, ValidatorFn } from "@angular/forms";

export function NoWhitespaceValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    // value truyền vào
    let controlVal = control.value;
    if (typeof controlVal === "number") {
      controlVal = `${controlVal}`;
    }
    const isWhitespace = (controlVal || "").trim().length === 0;
    const isValid = !isWhitespace;
    // whitespace: errors
    return isValid ? null : { whitespace: "value is only whitespace" };
  };
}

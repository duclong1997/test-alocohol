import { FormGroup } from "@angular/forms";
export function validateControlsValue(
  firstControlName: string,
  secondControlName: string
) {
  return (formGroup: FormGroup) => {
    const controlFirst = formGroup.get(firstControlName);
    const controlSecond = formGroup.get(secondControlName);

    return controlFirst.value === controlSecond.value
      ? controlSecond.setErrors(null)
      : controlSecond.setErrors({
          valueNotMatch: {
            first: controlFirst.value,
            second: controlSecond.value,
          },
        });
  };
}

import {
  ValidationErrors,
  ValidatorFn,
  AbstractControl,
  FormArray,
} from '@angular/forms';

export const regexValidator = (
  regex: RegExp,
  error: ValidationErrors
): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } | any => {
    if (!control.value) {
      return null;
    }

    const valid = regex.test(control.value);

    return valid ? null : error;
  };
};

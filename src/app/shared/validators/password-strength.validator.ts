import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]+/.test(value);
    const hasLowerCase = /[a-z]+/.test(value);
    const hasNumber = /[0-9]+/.test(value);

    const isValid = hasUpperCase && hasLowerCase && hasNumber;

    return isValid ? null : {
      hasLowerCase,
      hasUpperCase,
      hasNumber
    }
  }
}

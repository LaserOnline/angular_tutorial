import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export const idCardValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const value: string = control.value;
  // * ตรวจสอบ 13 หลัก
  if (!value || value.length !== 13) {
    return { idCardLength: true };
  }

  // * ตรวจสอบ ตัวเลข
  const idCardPattern = /^[1-9]\d{12}$/;

  // check if the ID card number matches the pattern
  if (!idCardPattern.test(value)) {
    return { idCardFormat: true };
  }

  // checksum validation for Thai ID card number
  // * ตรวจสอบ ความถูกต้องของ บัตรประชาชน
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(value.charAt(i), 10) * (13 - i);
  }
  const checkDigit = (11 - (sum % 11)) % 10;
  if (checkDigit !== parseInt(value.charAt(12), 10)) {
    return { idCardChecksum: true };
  }
  // * ผ่าน
  return null;
};

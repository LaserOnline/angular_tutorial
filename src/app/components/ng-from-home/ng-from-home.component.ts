import { Component, VERSION } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { idCardValidator } from './module/ID-Card-TH-Validator';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormRegisterComponent } from './form-register/form-register.component';
@Component({
  selector: 'app-ng-from-home',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormValidationComponent,
    FormRegisterComponent,
  ],
  templateUrl: './ng-from-home.component.html',
  styleUrls: ['./ng-from-home.component.scss'],
})
export class NgFromHomeComponent {
  name = 'Angular' + VERSION.major;
  // *  คือการ ตรวจาอบ ว่า null undefined หรือไม่ Validator
  idCard = new FormControl(null, [
    Validators.required,
    Validators.minLength(5),
  ]);
  idCard_User = new FormControl('', [Validators.required, idCardValidator]);
}

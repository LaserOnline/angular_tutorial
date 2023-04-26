import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
})
export class FormRegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.pattern('[a-zA-Z]*'),
      ]),
      lastname: new FormControl(null, [
        Validators.required,
        Validators.pattern('[a-zA-Z]*'),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      mobileNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9]*'),
      ]),
    });
  }

  registerForm: any;

  submitData() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      alert(
        `Thank You ${this.registerForm.value.firstName} \n ${this.registerForm.value.lastname} \n ${this.registerForm.value.email} \n ${this.registerForm.value.mobileNumber}`
      );
      this.registerForm.reset();
    }
  }

  get firstname() {
    return this.registerForm.get('firstName');
  }

  get lastname() {
    return this.registerForm.get('lastname');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get mobileNumber() {
    return this.registerForm.get('mobileNumber');
  }
}

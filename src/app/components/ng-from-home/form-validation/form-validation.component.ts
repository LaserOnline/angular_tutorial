import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss'],
})
export class FormValidationComponent {
  title = 'ReactiveForms';
  message?: string;
  email = new FormControl(null, Validators.required);
  password = new FormControl(null, Validators.required);

  getForm() {
    if (this.email.invalid || this.password.invalid) {
      return;
    }
    const email = this.email.value;
    const password = this.password.value;
    console.log('Email', email);
    console.log('Password', password);
    this.message = 'Success';
  }
}

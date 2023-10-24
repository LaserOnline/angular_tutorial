import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-one-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './one-input.component.html',
  styleUrls: ['./one-input.component.css']
})
export class OneInputComponent {
  // * Declare Variable Type Number
  value: number = 0;
  //* Declare Function Name CallFunc Get Value Type String Form HTML 
  callFunc(value: string) {
    // * Convert String to Number
    const number = Number(value)
    // * value get number
    this.value = number
  }
}

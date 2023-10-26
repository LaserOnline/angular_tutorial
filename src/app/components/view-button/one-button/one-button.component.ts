import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-one-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './one-button.component.html',
  styleUrls: ['./one-button.component.css']
})
export class OneButtonComponent {

  show() {
    console.log("Event Start")
  }

  onMouseEnter() {
    console.log("Mouse entered!");
  }

  onMouseLeave() {
    console.log("Mouse left!");
  }

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    console.log(`Input changed to: ${inputElement.value}`);
  }

  onFormSubmit() {
    console.log("Form submitted!");
  }

  onWindowResize(event: Event) {
    console.log("Window resized!");
  }


}

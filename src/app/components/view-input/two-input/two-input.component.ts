import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-two-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './two-input.component.html',
  styleUrls: ['./two-input.component.css']
})
export class TwoInputComponent {
  count:number = 0;

  add() {
    this.count++
  }

  delete() {
    if (this.count > 0)
      this.count--;
  }
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tree-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree-input.component.html',
  styleUrls: ['./tree-input.component.css']
})
export class TreeInputComponent {
  count: number = 0;
  @Input() step: number = 0;
  add() {
    if (this.count < 100)
    this.count = this.count + this.step
  }

  delete() {
    if (this.count > 0)
      this.count = this.count - this.step
  }
}

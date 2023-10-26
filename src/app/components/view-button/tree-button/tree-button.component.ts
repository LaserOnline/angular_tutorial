import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tree-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree-button.component.html',
  styleUrls: ['./tree-button.component.css']
})
export class TreeButtonComponent {
  number:number = 0
  @Output() event = new EventEmitter
  super() {
    this.number++;
    console.log(`${this.number}`)
    this.event.emit()
  }
}

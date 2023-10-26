import { Component,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeButtonComponent } from '../tree-button/tree-button.component';

@Component({
  selector: 'app-two-button',
  standalone: true,
  imports: [CommonModule,TreeButtonComponent],
  templateUrl: './two-button.component.html',
  styleUrls: ['./two-button.component.css']
})
export class TwoButtonComponent {
  testClick() {
    console.log(`Hello`)
  }
}

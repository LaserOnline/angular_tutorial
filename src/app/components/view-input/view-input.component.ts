import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneInputComponent } from './one-input/one-input.component';

@Component({
  selector: 'app-view-input',
  standalone: true,
  imports: [CommonModule,OneInputComponent],
  templateUrl: './view-input.component.html',
  styleUrls: ['./view-input.component.css']
})
export class ViewInputComponent {
  title:string = "View Input";
}

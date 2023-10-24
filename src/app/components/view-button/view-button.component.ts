import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneButtonComponent } from './one-button/one-button.component';

@Component({
  selector: 'app-view-button',
  standalone: true,
  imports: [CommonModule,OneButtonComponent],
  templateUrl: './view-button.component.html',
  styleUrls: ['./view-button.component.css']
})
export class ViewButtonComponent {

}

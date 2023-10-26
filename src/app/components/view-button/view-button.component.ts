import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneButtonComponent } from './one-button/one-button.component';
import { TwoButtonComponent } from './two-button/two-button.component';
import { TreeButtonComponent } from './tree-button/tree-button.component';

@Component({
  selector: 'app-view-button',
  standalone: true,
  imports: [CommonModule, OneButtonComponent, TwoButtonComponent,TreeButtonComponent],
  templateUrl: './view-button.component.html',
  styleUrls: ['./view-button.component.css']
})
export class ViewButtonComponent {

}

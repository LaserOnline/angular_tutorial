import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgifIfElseComponent } from './ngif-if-else/ngif-if-else.component';
@Component({
  selector: 'app-ngif-else-home',
  standalone: true,
  imports: [CommonModule, NgifIfElseComponent],
  templateUrl: './ngif-else-home.component.html',
  styleUrls: ['./ngif-else-home.component.scss'],
})
export class NgifElseHomeComponent {}

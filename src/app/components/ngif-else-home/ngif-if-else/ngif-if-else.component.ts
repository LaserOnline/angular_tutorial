import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngif-if-else',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngif-if-else.component.html',
  styleUrls: ['./ngif-if-else.component.scss'],
})
export class NgifIfElseComponent {
  title: string = 'If Else';
  username: string = 'LaserOnline';
  isAuthenticated: boolean = false;
  status: string = 'Success';
  count: number = 8;
  ChangeisAuthenticated(value: boolean) {
    this.isAuthenticated = value;
  }
}

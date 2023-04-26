import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-oops',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './oops.component.html',
  styleUrls: ['./oops.component.scss'],
})
export class OopsComponent {
  constructor(private router: Router) {}
  navigateToHome() {
    this.router.navigate(['home']);
  }
}

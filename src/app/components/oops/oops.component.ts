import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-oops',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './oops.component.html',
  styleUrls: ['./oops.component.css']
})
export class OopsComponent {
  constructor(private location: Location) { }
  NavigateBack() {
    this.location.back();
  }
}

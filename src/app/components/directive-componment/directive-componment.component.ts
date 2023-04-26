import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpBookDirective } from './http-book.directive';
import { Router } from '@angular/router';
@Component({
  selector: 'app-directive-componment',
  standalone: true,
  imports: [CommonModule, HttpBookDirective],
  templateUrl: './directive-componment.component.html',
  styleUrls: ['./directive-componment.component.scss'],
})
export class DirectiveComponmentComponent {
  title = 'Angular Directive';
  bookList = [];
  constructor(private router: Router) {}
}

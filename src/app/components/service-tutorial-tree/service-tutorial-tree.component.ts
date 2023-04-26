import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRequestGetComponent } from './components/component-request-get/component-request-get.component';
@Component({
  selector: 'app-service-tutorial-tree',
  standalone: true,
  imports: [CommonModule, ComponentRequestGetComponent],
  templateUrl: './service-tutorial-tree.component.html',
  styleUrls: ['./service-tutorial-tree.component.scss'],
})
export class ServiceTutorialTreeComponent implements OnInit {
  title: string = 'REST API service';
  ngOnInit(): void {}
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceOneHeaderComponent } from './components/service-one-header/service-one-header.component';
import { ServiceBodyComponent } from './components/service-body/service-body.component';
@Component({
  selector: 'app-service-tutorial-one',
  standalone: true,
  imports: [CommonModule, ServiceOneHeaderComponent, ServiceBodyComponent],
  templateUrl: './service-tutorial-one.component.html',
  styleUrls: ['./service-tutorial-one.component.scss'],
})
export class ServiceTutorialOneComponent {}

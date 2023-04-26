import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss'],
})
export class HomeComponentComponent {
  constructor(private router: Router) {}

  navigateToNgIFView() {
    this.router.navigate(['ngif-view']);
  }
  navigateToNgIFElse() {
    this.router.navigate(['ngif-else-home']);
  }
  navigateToNgSwitch() {
    this.router.navigate(['ng-switch']);
  }
  navigateToNgFrom() {
    this.router.navigate(['ng-from-home']);
  }
  navigateToStyleHome() {
    this.router.navigate(['style-home']);
  }
  navigateToEventBindingHome() {
    this.router.navigate(['event-binding-home']);
  }
  navigateToQrCode() {
    this.router.navigate(['qrcode']);
  }
  navigateToNgFor() {
    this.router.navigate(['ng-for']);
  }
  navigateToPrimeNG() {
    this.router.navigate(['prime-ng']);
  }
  navigateToViewChild() {
    this.router.navigate(['view-child']);
  }
  navigateDirective() {
    this.router.navigate(['directive']);
  }
  navigateToService1() {
    this.router.navigate(['service1']);
  }
  navigateToService2() {
    this.router.navigate(['service2']);
  }
  navigateToService3() {
    this.router.navigate(['service3']);
  }
}

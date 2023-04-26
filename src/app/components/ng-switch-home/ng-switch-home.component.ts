import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ng-switch-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-switch-home.component.html',
  styleUrls: ['./ng-switch-home.component.scss'],
})
export class NgSwitchHomeComponent {
  state?: string;

  sendState() {
    if (this.state === 'Success') {
      console.log(this.state);
      // ส่งค่าไปยัง backend หรือทำการดำเนินการต่อไป
    } else if (this.state === 'Warning') {
      console.log(this.state);
      // ส่งค่าไปยัง backend หรือทำการดำเนินการต่อไป
    } else if (this.state === 'ban') {
      console.log(this.state);
      // ส่งค่าไปยัง backend หรือทำการดำเนินการต่อไป
    } else {
      console.log(this.state);
    }
  }
}

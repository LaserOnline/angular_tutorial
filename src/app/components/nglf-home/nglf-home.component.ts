import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgifViewComponent } from './ngif-view/ngif-view.component';
@Component({
  selector: 'app-nglf-home',
  standalone: true,
  imports: [CommonModule, NgifViewComponent],
  templateUrl: './nglf-home.component.html',
  styleUrls: ['./nglf-home.component.scss'],
})
export class NglfHomeComponent {
  show: boolean = false;
  size: number = 1;
  width: number = 480;
  height: number = 280;
  status(state: boolean) {
    return (this.show = state);
  }

  fuc_sized(value: number) {
    this.width = this.width + 20;
    this.height = this.height + 20;
    this.size = this.size + value;
  }
}

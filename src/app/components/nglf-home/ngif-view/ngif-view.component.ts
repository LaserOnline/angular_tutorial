import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngif-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngif-view.component.html',
  styleUrls: ['./ngif-view.component.scss'],
})
export class NgifViewComponent {
  @Input() size = 0;
  @Input() width = 480;
  @Input() height = 280;
  @Input() state = false;
  image = 'https://wallpapercave.com/wp/wp9005946.jpg';
}

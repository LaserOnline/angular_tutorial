import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneInputComponent } from './one-input/one-input.component';
import { TwoInputComponent } from './two-input/two-input.component';
import { TreeInputComponent } from './tree-input/tree-input.component';
import { FourInputComponent } from './four-input/four-input.component';
import { FiveInputComponent } from './five-input/five-input.component';

@Component({
  selector: 'app-view-input',
  standalone: true,
  imports: [
    CommonModule,
    OneInputComponent,
    TwoInputComponent,
    TreeInputComponent,
    FourInputComponent,
    FiveInputComponent
  ],
  templateUrl: './view-input.component.html',
  styleUrls: ['./view-input.component.css']
})
export class ViewInputComponent {
  title: string = "View Input";
}

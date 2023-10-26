import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveInputComponent } from './five-input.component';

describe('FiveInputComponent', () => {
  let component: FiveInputComponent;
  let fixture: ComponentFixture<FiveInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FiveInputComponent]
    });
    fixture = TestBed.createComponent(FiveInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

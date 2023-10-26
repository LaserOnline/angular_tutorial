import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourInputComponent } from './four-input.component';

describe('FourInputComponent', () => {
  let component: FourInputComponent;
  let fixture: ComponentFixture<FourInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FourInputComponent]
    });
    fixture = TestBed.createComponent(FourInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

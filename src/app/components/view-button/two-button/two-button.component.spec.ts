import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoButtonComponent } from './two-button.component';

describe('TwoButtonComponent', () => {
  let component: TwoButtonComponent;
  let fixture: ComponentFixture<TwoButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TwoButtonComponent]
    });
    fixture = TestBed.createComponent(TwoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

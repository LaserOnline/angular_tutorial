import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeButtonComponent } from './tree-button.component';

describe('TreeButtonComponent', () => {
  let component: TreeButtonComponent;
  let fixture: ComponentFixture<TreeButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TreeButtonComponent]
    });
    fixture = TestBed.createComponent(TreeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

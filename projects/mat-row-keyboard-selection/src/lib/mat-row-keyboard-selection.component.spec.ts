import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatRowKeyboardSelectionComponent } from './mat-row-keyboard-selection.component';

describe('MatRowKeyboardSelectionComponent', () => {
  let component: MatRowKeyboardSelectionComponent;
  let fixture: ComponentFixture<MatRowKeyboardSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatRowKeyboardSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatRowKeyboardSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

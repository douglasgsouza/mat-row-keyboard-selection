import { TestBed } from '@angular/core/testing';

import { MatRowKeyboardSelectionService } from './mat-row-keyboard-selection.service';

describe('MatRowKeyboardSelectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatRowKeyboardSelectionService = TestBed.get(MatRowKeyboardSelectionService);
    expect(service).toBeTruthy();
  });
});

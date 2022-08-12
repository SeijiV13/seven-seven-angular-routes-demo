import { TestBed } from '@angular/core/testing';

import { ActivateChGuard } from './activate-ch.guard';

describe('ActivateChGuard', () => {
  let guard: ActivateChGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivateChGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

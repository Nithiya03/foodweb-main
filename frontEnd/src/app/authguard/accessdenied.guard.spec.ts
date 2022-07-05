import { TestBed } from '@angular/core/testing';

import { AccessdeniedGuard } from './accessdenied.guard';

describe('AccessdeniedGuard', () => {
  let guard: AccessdeniedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessdeniedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

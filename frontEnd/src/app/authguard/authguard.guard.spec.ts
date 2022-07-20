import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthguardGuard } from './authguard.guard';

describe('AuthguardGuard', () => {
  let guard: AuthguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule]
    });
    guard = TestBed.inject(AuthguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

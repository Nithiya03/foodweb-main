import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminAuthenticationGuard } from './admin-authentication.guard';

describe('AdminAuthenticationGuard', () => {
  let guard: AdminAuthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(AdminAuthenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

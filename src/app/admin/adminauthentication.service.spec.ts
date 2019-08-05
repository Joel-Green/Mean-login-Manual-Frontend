import { TestBed } from '@angular/core/testing';

import { AdminauthenticationService } from './adminauthentication.service';

describe('AdminauthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminauthenticationService = TestBed.get(AdminauthenticationService);
    expect(service).toBeTruthy();
  });
});

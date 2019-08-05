import { TestBed } from '@angular/core/testing';

import { CompanyauthenticationService } from './companyauthentication.service';

describe('CompanyauthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyauthenticationService = TestBed.get(CompanyauthenticationService);
    expect(service).toBeTruthy();
  });
});

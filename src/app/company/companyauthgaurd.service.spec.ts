import { TestBed } from '@angular/core/testing';

import { CompanyauthgaurdService } from './companyauthgaurd.service';

describe('CompanyauthgaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyauthgaurdService = TestBed.get(CompanyauthgaurdService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CompanyMService } from './company-m.service';

describe('CompanyMService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyMService = TestBed.get(CompanyMService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CateMService } from './cate-m.service';

describe('CateMService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CateMService = TestBed.get(CateMService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SlideMService } from './slide-m.service';

describe('SlideMService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlideMService = TestBed.get(SlideMService);
    expect(service).toBeTruthy();
  });
});

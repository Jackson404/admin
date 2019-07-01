import { TestBed } from '@angular/core/testing';

import { ResumeMService } from './resume-m.service';

describe('ResumeMService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResumeMService = TestBed.get(ResumeMService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LabelMService } from './label-m.service';

describe('LabelMService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LabelMService = TestBed.get(LabelMService);
    expect(service).toBeTruthy();
  });
});

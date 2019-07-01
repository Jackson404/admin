import { TestBed } from '@angular/core/testing';

import { PositionMService } from './position-m.service';

describe('PositionMService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PositionMService = TestBed.get(PositionMService);
    expect(service).toBeTruthy();
  });
});

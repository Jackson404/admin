import { TestBed } from '@angular/core/testing';

import { NewsMService } from './news-m.service';

describe('NewsMService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsMService = TestBed.get(NewsMService);
    expect(service).toBeTruthy();
  });
});

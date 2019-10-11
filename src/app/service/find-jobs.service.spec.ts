import { TestBed } from '@angular/core/testing';

import { FindJobsService } from './find-jobs.service';

describe('FindJobsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FindJobsService = TestBed.get(FindJobsService);
    expect(service).toBeTruthy();
  });
});

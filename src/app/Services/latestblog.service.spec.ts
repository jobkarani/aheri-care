import { TestBed } from '@angular/core/testing';

import { LatestblogService } from './latestblog.service';

describe('LatestblogService', () => {
  let service: LatestblogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestblogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

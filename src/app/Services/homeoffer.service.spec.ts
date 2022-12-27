import { TestBed } from '@angular/core/testing';

import { HomeofferService } from './homeoffer.service';

describe('HomeofferService', () => {
  let service: HomeofferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeofferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

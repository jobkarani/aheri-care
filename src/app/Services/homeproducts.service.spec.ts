import { TestBed } from '@angular/core/testing';

import { HomeproductsService } from './homeproducts.service';

describe('HomeproductsService', () => {
  let service: HomeproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

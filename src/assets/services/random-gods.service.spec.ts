import { TestBed } from '@angular/core/testing';

import { RandomGodsService } from './random-gods.service';

describe('RandomGodsService', () => {
  let service: RandomGodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomGodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SportsDataService } from './sports-data.service';

describe('SportsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportsDataService = TestBed.get(SportsDataService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RoverApiService } from './rover-api.service';

describe('RoverApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoverApiService = TestBed.get(RoverApiService);
    expect(service).toBeTruthy();
  });
});

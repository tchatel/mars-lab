import { TestBed } from '@angular/core/testing';

import { PhotoApiService } from './photo-api.service';

describe('PhotoApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoApiService = TestBed.get(PhotoApiService);
    expect(service).toBeTruthy();
  });
});

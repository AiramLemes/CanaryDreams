import { TestBed } from '@angular/core/testing';

import { IslaService } from './islas.service';

describe('IslasService', () => {
  let service: IslaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IslaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

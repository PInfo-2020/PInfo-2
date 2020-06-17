import { TestBed } from '@angular/core/testing';

import { ModulehttpService } from './modulehttp.service';

describe('ModulehttpService', () => {
  let service: ModulehttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModulehttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

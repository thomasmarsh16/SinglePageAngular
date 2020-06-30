import { TestBed } from '@angular/core/testing';

import { WeatherapiserviceService } from './weatherapiservice.service';

describe('WeatherapiserviceService', () => {
  let service: WeatherapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

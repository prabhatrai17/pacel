import { TestBed } from '@angular/core/testing';

import { ComplaintStatusService } from './complaint-status.service';

describe('ComplaintStatusService', () => {
  let service: ComplaintStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplaintStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

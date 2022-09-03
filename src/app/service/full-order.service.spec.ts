import { TestBed } from '@angular/core/testing';

import { FullOrderService } from './full-order.service';

describe('FullOrderService', () => {
  let service: FullOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

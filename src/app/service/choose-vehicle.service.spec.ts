import { TestBed } from '@angular/core/testing';

import { ChooseVehicleService } from './choose-vehicle.service';

describe('ChooseVehicleService', () => {
  let service: ChooseVehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChooseVehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

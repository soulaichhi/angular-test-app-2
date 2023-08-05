import { TestBed } from '@angular/core/testing';

import { CalulatorService } from './calulator.service';

describe('CalulatorService', () => {
  let service: CalulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

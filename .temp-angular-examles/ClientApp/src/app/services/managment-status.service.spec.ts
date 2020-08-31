import { TestBed } from '@angular/core/testing';

import { ManagmentStatusService } from './managment-status.service';

describe('ManagmentStatusService', () => {
  let service: ManagmentStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagmentStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

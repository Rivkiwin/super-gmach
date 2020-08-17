import { TestBed } from '@angular/core/testing';

import { ManagmentStatusService } from './managment-status.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ManagmentStatusService', () => {
  let service: ManagmentStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientTestingModule],
      providers: [ManagmentStatusService]});
    service = TestBed.inject(ManagmentStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

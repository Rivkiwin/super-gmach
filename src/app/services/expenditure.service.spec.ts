import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ExpenditureService } from './expenditure.service';
import { HttpClient } from '@angular/common/http';

describe('ExpenditureService', () => {
  let service: ExpenditureService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientTestingModule],providers:[ExpenditureService]});
    service = TestBed.inject(ExpenditureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

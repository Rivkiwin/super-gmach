import { TestBed } from '@angular/core/testing';

import { WithdrawalsService } from './withdrawals.service';

describe('WithdrawalsService', () => {
  let service: WithdrawalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WithdrawalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

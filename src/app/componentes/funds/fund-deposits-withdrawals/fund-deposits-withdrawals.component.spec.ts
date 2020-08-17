import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundDepositsWithdrawalsComponent } from './fund-deposits-withdrawals.component';

describe('FundDepositsWithdrawalsComponent', () => {
  let component: FundDepositsWithdrawalsComponent;
  let fixture: ComponentFixture<FundDepositsWithdrawalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundDepositsWithdrawalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundDepositsWithdrawalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalsAndDepositComponent } from './withdrawals-and-deposit.component';

describe('WithdrawalsAndDepositComponent', () => {
  let component: WithdrawalsAndDepositComponent;
  let fixture: ComponentFixture<WithdrawalsAndDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawalsAndDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalsAndDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

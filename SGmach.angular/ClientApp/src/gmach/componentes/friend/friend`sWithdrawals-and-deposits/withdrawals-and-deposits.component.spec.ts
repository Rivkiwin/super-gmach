import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalsAndDepositsComponent } from './withdrawals-and-deposits.component';

describe('WithdrawalsAndDepositsComponent', () => {
  let component: WithdrawalsAndDepositsComponent;
  let fixture: ComponentFixture<WithdrawalsAndDepositsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawalsAndDepositsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalsAndDepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendDepositsWithdrawalsComponent } from './friend-deposits-withdrawals.component';

describe('FriendDepositsWithdrawalsComponent', () => {
  let component: FriendDepositsWithdrawalsComponent;
  let fixture: ComponentFixture<FriendDepositsWithdrawalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendDepositsWithdrawalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendDepositsWithdrawalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWithdrawalsComponent } from './add-withdrawals.component';

describe('AddWithdrawalsComponent', () => {
  let component: AddWithdrawalsComponent;
  let fixture: ComponentFixture<AddWithdrawalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWithdrawalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWithdrawalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepaymentEditComponent } from './repayment-edit.component';

describe('RepaymentEditComponent', () => {
  let component: RepaymentEditComponent;
  let fixture: ComponentFixture<RepaymentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepaymentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepaymentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

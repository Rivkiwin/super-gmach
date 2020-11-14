import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADDDepositComponent } from './add-deposit.component';

describe('ADDDepositComponent', () => {
  let component: ADDDepositComponent;
  let fixture: ComponentFixture<ADDDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADDDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADDDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

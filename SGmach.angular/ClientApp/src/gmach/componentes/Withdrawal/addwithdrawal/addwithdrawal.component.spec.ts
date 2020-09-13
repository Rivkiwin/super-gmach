import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwithdrawalComponent } from './addwithdrawal.component';

describe('AddwithdrawalComponent', () => {
  let component: AddwithdrawalComponent;
  let fixture: ComponentFixture<AddwithdrawalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddwithdrawalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddwithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

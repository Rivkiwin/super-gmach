import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFreindToFundComponent } from './add-freind-to-fund.component';

describe('AddFreindToFundComponent', () => {
  let component: AddFreindToFundComponent;
  let fixture: ComponentFixture<AddFreindToFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFreindToFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFreindToFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

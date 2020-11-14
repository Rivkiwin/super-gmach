import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepaymentsListComponent } from './repayments-list.component';

describe('RepaymentsListComponent', () => {
  let component: RepaymentsListComponent;
  let fixture: ComponentFixture<RepaymentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepaymentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepaymentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

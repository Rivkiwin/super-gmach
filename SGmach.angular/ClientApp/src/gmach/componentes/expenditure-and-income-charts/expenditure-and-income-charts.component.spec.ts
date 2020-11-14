import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureAndIncomeChartsComponent } from './expenditure-and-income-charts.component';

describe('ExpenditureAndIncomeChartsComponent', () => {
  let component: ExpenditureAndIncomeChartsComponent;
  let fixture: ComponentFixture<ExpenditureAndIncomeChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenditureAndIncomeChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenditureAndIncomeChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

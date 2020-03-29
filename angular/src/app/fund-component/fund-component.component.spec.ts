import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundComponentComponent } from './fund-component.component';

describe('FundComponentComponent', () => {
  let component: FundComponentComponent;
  let fixture: ComponentFixture<FundComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

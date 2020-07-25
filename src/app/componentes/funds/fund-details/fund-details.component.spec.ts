import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundDetailsComponent } from './fund-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('FundDetailsComponent', () => {
  let component: FundDetailsComponent;
  let fixture: ComponentFixture<FundDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ imports: [
      HttpClientTestingModule,
      RouterTestingModule.withRoutes([]),
    ],
      declarations: [ FundDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureComponent } from './expenditure.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ExpenditureComponent', () => {
  let component: ExpenditureComponent;
  let fixture: ComponentFixture<ExpenditureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ imports: [
      HttpClientTestingModule,
      RouterTestingModule.withRoutes([]),
    ],
      declarations: [ ExpenditureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

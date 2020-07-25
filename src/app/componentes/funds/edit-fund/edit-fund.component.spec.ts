import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFundComponent } from './edit-fund.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditFundComponent', () => {
  let component: EditFundComponent;
  let fixture: ComponentFixture<EditFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ imports: [
      HttpClientTestingModule,
      RouterTestingModule.withRoutes([]),
    ],
      declarations: [ EditFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

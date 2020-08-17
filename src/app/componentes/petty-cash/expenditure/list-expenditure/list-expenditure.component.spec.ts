import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExpenditureComponent } from './list-expenditure.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListExpenditureComponent', () => {
  let component: ListExpenditureComponent;
  let fixture: ComponentFixture<ListExpenditureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ imports: [
      HttpClientTestingModule,
      RouterTestingModule.withRoutes([]),
    ],
      declarations: [ ListExpenditureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  
  // it(`should have a title 'I love pizza!'`, async(() => {
  //   fixture = TestBed.createComponent(ListExpenditureComponent);
  //   component = fixture.debugElement.componentInstance;
  //   expect(component.title).toEqual('I love pizza!');
  // }));
});

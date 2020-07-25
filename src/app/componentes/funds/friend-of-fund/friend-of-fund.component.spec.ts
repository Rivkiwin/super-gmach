import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendOfFundComponent } from './friend-of-fund.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('FriendOfFundComponent', () => {
  let component: FriendOfFundComponent;
  let fixture: ComponentFixture<FriendOfFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ imports: [
      HttpClientTestingModule,
      RouterTestingModule.withRoutes([]),
    ],
      declarations: [ FriendOfFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendOfFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

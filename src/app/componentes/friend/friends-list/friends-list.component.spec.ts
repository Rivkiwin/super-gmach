import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsListComponent } from './friends-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('FriendsListComponent', () => {
  let component: FriendsListComponent;
  let fixture: ComponentFixture<FriendsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ imports: [
      HttpClientTestingModule,
      RouterTestingModule.withRoutes([]),
    ],
      declarations: [ FriendsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

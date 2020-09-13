import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSelecteComponent } from './user-selecte.component';

describe('UserSelecteComponent', () => {
  let component: UserSelecteComponent;
  let fixture: ComponentFixture<UserSelecteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSelecteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSelecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

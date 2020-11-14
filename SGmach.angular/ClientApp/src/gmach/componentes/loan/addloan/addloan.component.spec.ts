import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLoadComponent } from './addloan.component';

describe('AddloanComponent', () => {
  let component: AddLoadComponent;
  let fixture: ComponentFixture<AddLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

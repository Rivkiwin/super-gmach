import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmachMenuComponent } from './gmach-menu.component';

describe('GmachMenuComponent', () => {
  let component: GmachMenuComponent;
  let fixture: ComponentFixture<GmachMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmachMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmachMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmachMngMenuComponent } from './gmach-mng-menu.component';

describe('GmachMngMenuComponent', () => {
  let component: GmachMngMenuComponent;
  let fixture: ComponentFixture<GmachMngMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmachMngMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmachMngMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBoxAddComponent } from './message-box-add.component';

describe('MessageBoxAddComponent', () => {
  let component: MessageBoxAddComponent;
  let fixture: ComponentFixture<MessageBoxAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageBoxAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBoxAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
